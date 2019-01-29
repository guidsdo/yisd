import * as commander from "commander";
import { eisd } from "eisd";

commander
    .usage("[options] <directories...>")
    .arguments("[options] <directories...>")
    .option("-a, --async", "Execute yarn async across all folders, output will be a mess")
    .option(
        "-e, --allowErrors",
        "Allow errors (at default we stop when there is one). NOTE: always true when in async mode!"
    )
    .option(
        "-d, --envDirectories [environment_key]",
        "Environment variable that contains the directories, for example a package.json config var would be: npm_config_myVar"
    )
    .option("-v, --verbose", "More verbose output")
    .parse(process.argv);

const allowErrors = commander.allowErrors === true;
const async = commander.async === true;
const envDirectories: string = commander.envDirectories || "";
const verbose = commander.verbose === true;

eisd("yarn", commander.args, allowErrors, async, envDirectories, verbose);
