import { boot } from 'quasar/wrappers';
import { LoadingBar } from 'quasar';

export default boot(async () => {
  LoadingBar.setDefaults({
    color: 'purple',
    size: '15px',
    position: 'bottom',
  });
});
