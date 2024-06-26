import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/axios'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
const app = createApp(App)

import ToastService from 'primevue/toastservice';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import AutoComplete from 'primevue/autocomplete';
import Badge from 'primevue/badge';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import Fieldset from 'primevue/fieldset';
import Image from 'primevue/image';
import InputNumber from "primevue/inputnumber";
import InputSwitch from 'primevue/inputswitch';
import InputText from "primevue/inputtext";
import Knob from "primevue/knob";
import Listbox from 'primevue/listbox';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import RadioButton from 'primevue/radiobutton';
import Sidebar from 'primevue/sidebar';
import SplitButton from 'primevue/splitbutton';
import Steps from 'primevue/steps';
import TabPanel from 'primevue/tabpanel';
import TabView from 'primevue/tabview';
import Tag from 'primevue/tag';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToggleButton from 'primevue/togglebutton';
import Tooltip from 'primevue/tooltip';

app.use(router)
app.use(store)
app.use(PrimeVue)
app.use(ToastService)

app.directive('tooltip', Tooltip)

app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('AutoComplete', AutoComplete);
app.component('Badge', Badge);
app.component('Breadcrumb', Breadcrumb);
app.component('Button', Button);
app.component('Calendar', Calendar);
app.component('Card', Card);
app.component('Carousel', Carousel);
app.component('Checkbox', Checkbox);
app.component('Chip', Chip);
app.component('Column', Column);
app.component('DataTable', DataTable);
app.component('Dialog', Dialog);
app.component('Divider', Divider);
app.component('Dropdown', Dropdown);
app.component('Fieldset', Fieldset);
app.component('Image', Image);
app.component('InputNumber', InputNumber);
app.component('InputSwitch', InputSwitch);
app.component('InputText', InputText);
app.component('Knob', Knob);
app.component('Listbox', Listbox);
app.component('Menu', Menu);
app.component('MenuBarPrime', Menubar);
app.component('Message', Message);
app.component('OverlayPanel', OverlayPanel);
app.component('Paginator', Paginator);
app.component('Panel', Panel);
app.component('ProgressBar', ProgressBar);
app.component('ProgressSpinner', ProgressSpinner);
app.component('RadioButton', RadioButton);
app.component('Sidebar', Sidebar);
app.component('SplitButton', SplitButton);
app.component('Steps', Steps);
app.component('TabPanel', TabPanel);
app.component('TabView', TabView);
app.component('Tag', Tag);
app.component('Textarea', Textarea);
app.component('Toast', Toast);
app.component('ToggleButton', ToggleButton);

app.mount('#app')