const fs = require('fs');
const Table = require('cli-table');
const chalk = require('chalk');
const packageJson = require('../package.json');

const next = {
  dependencies: packageJson.dependencies || {},
  devDependencies: packageJson.devDependencies || {},
  peerDependencies: packageJson.peerDependencies || {},
  bundledDependencies: packageJson.bundledDependencies || {},
  optionalDependencies: packageJson.optionalDependencies || {},
};

const status = {
  unchanged: chalk.gray,
  updated: chalk.bold.green,
  removed: chalk.bold.red,
}

fs.readdirSync(__dirname + '/dependencies/')
  .map(file => __dirname + '/dependencies/' + file)
  .map(file => {
    const config = require(file);
  
    const state = Object.keys(config).map(type => {
      const dep = config[type];
      const state = {
        type,
        unchanged: {},
        updated: {},
        removed: {},
      };
    
      Object.keys(dep).forEach(name => {
        const version = dep[name];
      
        // check removed
        if (!next[type] || !next[type][name]) {
          state.removed[name] = {prev: version, next: '-'};
        }
        // check updated
        else if (next[type][name] !== version) {
          state.updated[name] = {prev: version, next: next[type][name]};
          delete next[type][name];
        }
        // unchanged
        else {
          state.unchanged[name] = {prev: version, next: version};
          delete next[type][name];
        }
      });
    
      return state;
    });
  
    return {file, state};
  })
  .forEach(config => {
    console.log(config.file);
    const table = new Table({
      head: ['Dependency', 'Name', 'Prev', 'Next'],
    });
    config.state.forEach(state => {
      Object.keys(status).forEach(statusName => {
        Object.keys(state[statusName]).forEach(dependencyName => {
          table.push([
            status[statusName](state.type),
            status[statusName](dependencyName),
            status[statusName](state[statusName][dependencyName]['prev']),
            status[statusName](state[statusName][dependencyName]['next']),
          ]);
        });
      });
    });
    console.log(table.toString());
  });

const added = next;
const numAdded = Object.keys(added).reduce((count, type) => {
  return count + Object.keys(added[type]).length;
}, 0);

if (numAdded > 0) {
  console.log('New dependencies');
  const table = new Table({
    head: ['Dependency', 'Name', 'Version'],
  });
  Object.keys(added).forEach(dependencyType => {
    Object.keys(added[dependencyType]).forEach(dependencyName => {
      table.push([
        chalk.bold.green(dependencyType),
        chalk.bold.green(dependencyName),
        chalk.bold.green(added[dependencyType][dependencyName]),
      ]);
    });
  });
  console.log(table.toString());
}
  