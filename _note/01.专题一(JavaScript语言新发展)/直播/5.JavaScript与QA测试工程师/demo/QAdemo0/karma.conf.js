// Karma configuration
// Generated on Wed May 22 2019 00:33:00 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //  指定我们的断言
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    //  要测的文件
    //  *表示所有文件，** 表示所有的文件夹
    files: [
        "tests/unit/**/*.js",
        "tests/unit/**/*.spec.js"
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // https://www.npmjs.com/package/karma-coverage
    // 用来对指定文件的覆盖率的检查
    preprocessors: {
      'tests/unit/**/*.js': ['coverage']
    },

    // 生成报表
    //  一般放在当前目录的docs里面
    coverageReporter: {
        type : 'html',
        dir : './docs/coverage/'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //  检查系统进程，和覆盖率
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    //  要改成true，因为它要在无头浏览器里面跑
    //  无头浏览器：没有界面 => 因为我们以后要把环境集成在cli自动化部署的环境里面
    //  是否完成之后关闭
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
