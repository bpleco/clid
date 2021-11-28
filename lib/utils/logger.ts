import chalk from 'chalk';
import figures from 'figures';

export const success = (id: string) => {
  console.log(`${chalk.green(figures.tick)} Copied ${id} to clipboard`);
};
