const 
    gulp = require("gulp"),
    imagemin = require("gulp-imagemin"),
    webp = require("imagemin-webp"),
    extReplace = require("gulp-ext-replace");

gulp.task("exportWebP", function(done) {
    let src = ["src/**/*.png", "src/**/*.jpg", "src/**/*.jpeg"];
    let dest = "./dist/";
    gulp.src(src)
        .pipe(imagemin([
            webp({
                quality: 75
            })
        ]))
        .pipe(extReplace(".webp"))
        .pipe(gulp.dest(dest));
    done();
});