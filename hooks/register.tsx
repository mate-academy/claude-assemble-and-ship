import { Register } from 'claude-code';

export const register: Register = (on, options) => {
  on('session.start', () => {
    $.command.register({
      name: 'qa-kit:summarize-changes',
      description: 'Summarise changes on the current branch',
    });
  });

  on('command.run', { command: 'qa-kit:summarize-changes' }, async () => {
    try {
      // Get the current branch and main branch
      const branch = await $.process.spawn('git', ['rev-parse', '--abbrev-ref', 'HEAD']);
      const currentBranch = branch.stdout.trim();

      // Get the diff summary
      const diff = await $.process.spawn('git', ['diff', 'main...HEAD', '--name-status']);
      const files = diff.stdout.trim().split('\n').filter(Boolean);

      if (files.length === 0) {
        return { text: 'No changes on current branch.' };
      }

      // Format each file change
      const summary = files
        .map((line) => {
          const [status, ...parts] = line.split('\t');
          const file = parts.join('\t');
          const statusMap: Record<string, string> = {
            'M': 'Modified',
            'A': 'Added',
            'D': 'Deleted',
            'R': 'Renamed',
            'T': 'Type changed',
          };
          return `- ${file}: ${statusMap[status] || status}`;
        })
        .join('\n');

      return { text: `## Changes on ${currentBranch}\n\n${summary}` };
    } catch (error) {
      return { text: `Error summarizing changes: ${error instanceof Error ? error.message : String(error)}` };
    }
  });
};
