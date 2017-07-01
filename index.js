const del = require('del');

del(['img/*.png']).then(function (paths){ //! znaczy nie usuwaj
    console.log('Deleted files and folders:\n', paths.join('\n'));
});
