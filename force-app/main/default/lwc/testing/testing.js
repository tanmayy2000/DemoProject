import { LightningElement } from 'lwc';
export default class Testing extends LightningElement {
    value = [''];

    get options() {
        return [
            { label: 'Tanmay', value: 'Tanmay' },
            { label: 'Vivek', value: 'Vivek' },
        ];
    }

    get selectedValues() {
        return this.value.join(',');
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}

