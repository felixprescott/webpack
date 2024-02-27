import path from 'path';

import webpack from 'webpack';
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildPaths, BuildPlatform} from "./config/build/types/types";

interface IEnvVars {
    mode?: BuildMode,
    analyzer?: boolean,
    port?: number,
    platform?: BuildPlatform,
    
}

export default (env: IEnvVars) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src')
    }
    const config: webpack.Configuration = buildWebpack({
        paths,
        mode: env.mode ?? 'development',
        analyzer: env.analyzer ?? false,
        port: env.port ?? 3000,
        platform: env.platform ?? 'desktop',
    });

    return config;
}
