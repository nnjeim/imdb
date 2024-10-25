import { Livewire, Alpine } from '../../vendor/livewire/livewire/dist/livewire.esm';
import usersRowData from './users/usersRowData';
import usersBulkActions from './users/usersBulkActions';
import recordsRowData from './records/recordsRowData';
import recordsBulkActions from './records/recordsBulkActions';

Alpine.data('usersRowData', usersRowData);
Alpine.data('usersBulkActions', usersBulkActions);
Alpine.data('recordsRowData', recordsRowData);
Alpine.data('recordsBulkActions', recordsBulkActions);

Livewire.start();
window.Alpine = Alpine;
