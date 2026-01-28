import fs from 'fs';
import path from 'path';
import beautify from 'js-beautify';

const beautifyHtml = beautify.html;

// HTMLファイルを検索するディレクトリ
const targetDirs = ['./dist/'];

// 整形オプション
// https://www.npmjs.com/package/js-beautify
const beautifyOptions = {
  indent_size: 2,
  end_with_newline: true,
  preserve_newlines: false,
  max_preserve_newlines: 0,
  wrap_line_length: 0,
  wrap_attributes_indent_size: 0,
  unformatted: ['b', 'em'],
};

const processDirectory = (dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.log(err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.log(err);
          return;
        }

        if (stats.isDirectory()) {
          processDirectory(filePath);
        } else if (file.match(/\.html$/)) {
          fs.readFile(filePath, 'utf8', (err, html) => {
            if (err) {
              console.log(err);
              return;
            }

            const result = beautifyHtml(html, beautifyOptions);

            fs.writeFile(filePath, result, 'utf8', (err) => {
              if (err) console.log(err);
            });
          });
        }
      });
    });
  });
};

targetDirs.forEach((targetDir) => {
  processDirectory(targetDir);
});
