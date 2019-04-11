// const gulp = require(`gulp`);
// const sass = require(`gulp-sass`);
// const browserSync = require(`browser-sync`);
// const concat = require(`gulp-concat`);
// const uglify = require(`gulp-uglify`);

// // gulp.task(`name-task`, function() {
// //     gulp.src(source-files)
// //     .pipe(gulpPlagin())
// //     .pipe(gulp.dest(`destination-directory`))
// // })
// gulp.task(`browserSync`, function() {
//     browserSync({
//         server: {
//             baseDir: `src`
//         },
//         notify: false
//     })
// })

// gulp.task(`sass`, function() {
//     gulp.src(`src/scss/**/*.scss`)
//     .pipe(sass())
//     .pipe(gulp.dest(`src/css`))
//     .pipe(browserSync.reload({
//         stream: true
//     }))
// })

// gulp.task(`scripts`, function() {
//     gulp.src(`src/js/assest/*.js`)
//     .pipe(concat(`main.min.js`))
//     .pipe(uglify())
//     .pipe(gulp.dest(`src/js`))
//     .pipe(browserSync.reload({
//         stream: true
//     }))
// })

// gulp.task(`watch`, [`browserSync`, `sass`, `scripts`], function() {
//     gulp.watch(`src/scss/**/*.scss`, [`sass`]);
//     gulp.watch(`src/*.html`, browserSync.reload);
//     gulp.watch(`src/js/**/*.js`, [`scripts`])
// })



const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCss = require("gulp-clean-css");

gulp.task("browserSync", function() {
    browserSync({
        server: {
            baseDir: "src"
        },
        notify: false
    })
})

gulp.task("sass", function() {
    gulp.src("src/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.reload({
        stream: true
    }))
})

gulp.task("script", function() {
    gulp.src("src/js/assets/*.js")
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.reload({
        stream: true
    }))
})

gulp.task("watch", ["browserSync", "sass", "script"], function() {
    gulp.watch("src/scss/*.scss", ["sass"]);
    gulp.watch("src/*.html", browserSync.reload);
    gulp.watch("src/js/**/*.js", ["script"]);
})