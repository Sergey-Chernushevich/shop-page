import less from "gulp-less"; // импортируем gulp-less вместо gulp-sass
import rename from "gulp-rename";

import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";

export const lessTask = () => {
  return (
    app.gulp
      .src(app.path.src.less, { sourcemaps: true }) // путь к LESS файлам
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "LESS",
            message: "Error: <%=error.message%>",
          })
        )
      )
      .pipe(app.plugins.replace(/@img\//g, `../img/`)) // если нужно заменить пути
      .pipe(
        less({
          // Можно задать опции LESS, например, переменные
        })
      )
      .pipe(groupCssMediaQueries())
      .pipe(
        webpcss({
          webpClass: ".webp",
          noWebpClass: ".no-webp",
        })
      )
      .pipe(
        autoprefixer({
          grid: true,
          overrideBrowserlist: ["last 5 version"],
          cascade: true,
        })
      )
      // Не сжатый файл стилей (если нужен)
      .pipe(app.gulp.dest(app.path.build.css))
      // Минифицированный файл
      .pipe(cleanCss())
      .pipe(
        rename({
          extname: ".min.css",
        })
      )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream())
  );
};
