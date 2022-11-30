const { data, tambah, ubah, hapus, index, store, update, destroy } = require('./FruitsController.js');

const main = () => {
  data();
  index();
  tambah();
  store('pisang');
  ubah();
  update(0, 'kelapa');
  hapus();
  destroy(0);
};

main();
