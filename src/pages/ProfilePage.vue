<template>
  <div class="flex justify-between">
    <h3 class="text-xl font-bold text-left py-2">Standard Template</h3>
    <button class="text-[#6F6F6F] border px-2 py-2 hover:bg-green-500 mb-4" @click="generatePDF">
      Download PDF
    </button>
  </div>
  <hr class="border-r-zinc-500" />
    <div class="text-right pr-6 text-3xl">Invoice</div>
    <div
      class="border-dashed border-2 w-72 h-52 flex items-center justify-center"
    >
    <div class="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="3em"
        viewBox="0 0 448 512"
        class="pl-6 pb-2"
      >
              <path
          d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"
        />
      </svg>
      <p class="pt-12">Upload Logo</p>
    </div>
    </div>
    
    <div class="flex mt-40 justify-between">
 
      <!--space-x-96 -->
      <div class="text-left">
        <p class="text-[#007D88]">- Your business information</p>
        <div class="text-[#6F6F6F]">
          <p class="font-semibold mt-4">Hencework</p>
          <p class="mt-2">4747, Pearl Street</p>
          <p>Rainy Day Drive,</p>
          <p>Washington DC 42156</p>
          <p>jampack_01@hencework.com</p>
        </div>
      </div>
      <div class="space-y-4">
        <div class="flex space-x-7
        ">
          <p class="pt-2">Invoice No*</p>
          <input type="text" v-model="invoiceNo" class="border rounded-lg h-10" />
        </div>
        <div class="flex space-x-4">
          <p class="pt-2">Date</p>
          <input
            type="text"
            v-model="invoiceDate"
            class="border rounded-lg h-10"
          />
        </div>
    </div>
    </div>
    <!-- <hr class="border-r-zinc-500 mt-8" /> -->
    <div class="mb-6 mt-4 flex items-center space-x-4 rounded-md bg-blue-100 py-3">
      <p class="pb-3 pl-4 pt-2 text-left">Filters</p>
      <select v-model="selectedNumberFormat" class="h-10 rounded-lg border p-2 pl-2">
        <option value="ExportCSV">Number format</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
      </select>
      <select v-model="selectedColumnOption" class="h-10 rounded-lg border p-2">
        <option value="ExportCSV">Add/Remove columns</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
      </select>
      <select v-model="selectedCurrency" @change="updateCurrency" class="h-10 rounded-lg border p-2">
        <option value="XOF">XOF (FCFA)</option>
        <option value="USD">US Dollar ( $ USD)</option>
        <option value="EUR">Euro </option>
      </select>
    </div>
    <div class=" ">
      <div class="mt-20 border-2 pt-8 px-6 mx-auto w-[1268px]">
      <table class="w-full  bg-white ">
        <thead class="">
          <tr class=" bg-[#007D88] text-left text-white  ">
            <th class="p-4 w-1/2 text-start font-normal">Item</th>
            <th class="p-4 font-normal">Quantity</th>
            <th class="p-4 font-normal">Price</th>
            <th class="p-4 font-normal">Amount</th>
          </tr>
        </thead>
        <tbody class="text-black " v-for="(item, index) in items" :key="index">
          <tr>
            <td class="pt-4"></td>
          </tr>
          <tr class=" border-l border-r border-t">
            <td class="rounded-full border-b border-gray-200 p-4 pt-4">
              <select v-model="item.selectedService" @change="updateServiceDetails(item)" class="solid w-full rounded-lg border pt-4">
                <option v-for="service in services" :value="service.name" :key="service.name">{{ service.name }}</option>
              </select>
              
            </td>
            <td class="rounded-full border border-gray-200 p-4 pt-4">
              <input
                type="text"
                class="solid rounded-lg border w-14 p-2 flex "
                placeholder="1"
                v-model="item.quantity"
              />
            </td>
            <td
              class="rounded-full border-b border-r-2 border-gray-200 p-4 pt-4"
            >
              <input
                type="text"
                class="solid rounded-lg border w-max p-2 flex "
                placeholder="150.000"
                v-model="item.price"
              />
            </td>
            <td class="bg-[#EBF5F5] relative" rowspan="2">
              <div class="flex p-4">
                <input
  type="text"
  class="solid rounded-lg border w-max p-2 flex"
  :value="calculateAmount(item.quantity, item.price)"
  readonly
/>

                <button
                  class="rounded-full bg-[#6F6F6F]  flex items-center justify-center absolute -top-2 -right-3 h-6 w-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 384 512"
                    class="fill-white"
                    @click="removeItem(index)"
                  >
                    <path
                      d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr class="border-b border-l border-r">
            <td colspan="3" class="col-span-3 rounded-full border-gray-200 p-4">
              <input
                type="text"
                class="solid col-span-3 w-full rounded-lg border pt-4"
                v-model="item.description"
                :placeholder="item.selectedService ? getServiceDescription(item.selectedService) : 'Item Description'"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex pt-4 items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          class=""
        >
          <path
            d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
          />
        </svg>
        <button class="text-left text-[#007D88]" @click="addItem">
          Add new item
        </button>
      </div>
      <div class="flex justify-end pt-20">
        <table class="w- border">
          <tr class="text-left text-black">
            <th class="p-4 text-start font-normal">Subtotal</th>
            <th class="bg-[#EBF5F5] p-4 font-normal w-30">
              {{ calculateSubtotal() }}
            </th>
          </tr>
          <tbody>
            <tr class="border text-left">
              <td class="p-4">Item Discount</td>
              <td class="bg-[#EBF5F5] p-4 font-normal"></td>
            </tr>
            <tr class="text-left">
              <td class="flex justify-between border-r">
                <div class="flex h-16 w-24 items-center border-r-2 p-4">
                  Extra Discount
                </div>
                <div class="p-2 border-r">
                  <input
                    type="text"
                    class="solid rounded-lg border pt-4"
                    value="1"
                  />
                </div>
                <div class="p-2">
                  <input
                    type="text"
                    class="solid rounded-lg border pt-4"
                    value="1"
                  />
                </div>
              </td>
              <td class="bg-[#EBF5F5] p-4 font-normal"></td>
            </tr>
            <tr class="border text-left bg-[#EBF5F5]">
              <td class="p-4 border-r">Total</td>
              <td class="bg-[#EBF5F5] p-4 font-normal">
                {{ calculateTotal() }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <div class="flex w-1/3 justify-between pt-8">
          <p>Note client</p>
          <p class="">1400</p>
        </div>
        <div class="flex pt-2">
          <textarea
            type="text"
            class="pt-4 border rounded-md h-36 solid w-1/3"
            placeholder=" Redesign of agencyduck.com"
            v-model="notation"
          />
        </div>
      </div>
      <div class="text-left rounded-xl pt-2">
        <button class="text-[#6F6F6F] border px-2 py-2 hover:bg-">
          Add Notes
        </button>
      </div>
      <div class="text-left rounded-xl pt-2">
  </div>
    </div>
  </div>
  
</template>

<script>

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export default {
  data() {
    return {
      wiwi: '',
      notation: '',
      invoiceNo: '',
      invoiceDate: '',
      dueDate: '',
      customerNo: '',
      selectedCurrency: "XOF",
      exchangeRates: {
      XOF: 1,
      USD: 0.001664,
      EUR: 0.001524,
    },
      items: [],
      services: [
      { name: "Web Development", price: "700,000", description: "Nous gérons votre site web peut importe vos besoins avec notre équipe et nos experts ! Prenez l'accompagnement qu'il vous faut avec le déploiement le plus vite possible" },
      { name: "UX Design", price: "850,000", description: "Commandez votre design web en toute sécurité et fiabilité et sans tracas !" },
      { name: "Community Management", price: "650,000", description: "Obtenez une gestion de réseaux sociaux totalement unique !" },
      { name: "Graphisme Design", price: "250,000", description: "Affiches uniques, clients uniques !" },
  ],
    };
  },

  methods: {
  generatePDF() {
    const docDefinition = {
      content: [
        {
          text: 'Invoice',
          style: 'header',
          alignment: 'right'
        },
        {
          
        },
        {
          text: '- Your business information',
          style: 'subheader',
          color: '#007D88',
          margin: [0, 120, 0, 0]
        },
        {
        columns: [
            {
              width: '50%',
              text: [
                { text: 'Hencework\n', style: 'businessName' },
                { text: '4747, Pearl Street\n', style: 'businessName2' },
                { text: 'Rainy Day Drive,\n', style: 'businessName2' },
                { text: 'Washington DC 42156\n', style: 'businessName2' },
                { text: 'jampack_01@hencework.com\n', style: 'businessName2' }
              ]
            },
            {
              width: '50%',
              text: [
                { text: `Invoice No*: ${this.invoiceNo}\n`, style: 'businessName3' },
                { text: `Invoice Date*: ${this.invoiceDate}\n`, style: 'businessName3' },
              ],
              alignment: 'right'
            },
          ]
        },
          {
			style: 'tableExample',
			table: {
        widths: [250, '*', '*', '*'],
        body: [
          [
            { text: 'Name', fillColor: '#007D88', border: [false, false, false, false] },
            { text: 'Quantitiy', fillColor: '#007D88', border: [false, false, false, false] },
            { text: 'Price', fillColor: '#007D88', border: [false, false, false, false] },
            { text: 'Amount', fillColor: '#007D88', border: [false, false, false, false] }
          ],
          [
            { text: '', border: [false, false, false, false] },
            { text: '', border: [false, false, false, false] },
            { text: '', border: [false, false, false, false] },
            { text: '', border: [false, false, false, false] },
          ],
         [
            { text: this.items.map(item => `${item.selectedService}`)},
            { text: this.items.map(item => `${item.quantity}`)},
            { text: this.items.map(item => `${item.price}`)},
            {text: this.calculateSubtotal(),
              rowSpan: 2,
              style: 'subheader'
            }
          ],
          [
          {
            text: this.items.map(item => `${item.description}`), style: 'subheader',  colSpan: 3},
          ]
        ]

      },
    },
    {
          width: '25%',
          margin: [256, 20, 0, 150],
          table: {
            widths: [166, '*'],
            body: [
              [
                { text: 'Subtotal', style: 'tableHeader' },
                { text: this.calculateSubtotal(), style: 'tableValue', alignment: 'right' }
              ],
              [
                { text: 'Item Discount', style: 'tableHeader' },
                { text: '', style: 'tableValue', alignment: 'right' }
              ],
              [
                {
                  text: [
                    { text: 'Extra Discount\n', style: 'tableHeader' },
                  ],
                },
                { text: '', style: 'tableValue', alignment: 'right' }
              ],
              [
                { text: 'Total', style: 'tableHeader' },
                { text: this.calculateTotal(), style: 'tableValue', alignment: 'right' }
              ],
            ],
          },
        },
        {
          text : `${this.notation}\n`
        }
      ],
      styles: {
          header: {
            fontSize: 16,
            bold: true
          },
          subheader: {
            fontSize: 10,
            bold: false
          },
          businessName: {
            fontSize: 10,
            bold: true
          },
          businessName2: {
            fontSize: 10,
            bold: false
          },
          tableExample: {
            margin: [0, 5, 0, 15]
          },
          businessName3: {
            fontSize: 10,
            bold: false,
          },
          subsubheader: {
            fontSize: 8,
            bold: true,
           color: "#555555",
        },
      }
    };
    pdfMake.createPdf(docDefinition).open();
  },

/*{
        columns : [ 
          {},
         { 
          table: {
            widths: ['*', '*' ],
            body: [
              [
                { text: 'Subtotal', style: 'tableHeader' },
                { text: this.calculateSubtotal(), style: 'tableValue', alignment: 'right' }
              ],
              [
                { text: 'Item Discount', style: 'tableHeader' },
                { text: '', style: 'tableValue', alignment: 'right' }
              ],
              [
                {
                  text: [
                    { text: 'Extra Discount\n', style: 'tableHeader' },
                  ],
                },
                { text: '', style: 'tableValue', alignment: 'right' }
              ],
              [
                { text: 'Total', style: 'tableHeader' },
                { text: this.calculateTotal(), style: 'tableValue', alignment: 'right' }
              ],
            ],
          },
        },
      ],
    },
*/

  updateCurrency() {
    // Mise à jour des taux de change en fonction de la devise sélectionnée
    this.updateItemPrices();
  },
  updateItemPrices() {
    for (const item of this.items) {
      item.convertedPrice = (
        parseFloat(item.price) * this.exchangeRates[this.selectedCurrency]
      ).toFixed(2);
    }
  },


  updateServiceDetails(item) {
      const selectedService = this.services.find(service => service.name === item.selectedService);
      if (selectedService) {
        item.price = selectedService.price;
        item.description = selectedService.description;
      } else {
        item.selectedService === "Select a service"
        item.price = "";
        item.description = "";
      }
    },
    getServiceDescription(selectedService) {
      const service = this.services.find(service => service.name === selectedService);
      return service ? service.description : '';
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    addItem() {
      this.items.push({
      selectedService: "Web Development", 
      price: "150.000",
      description: "Nous gérons votre site web peut importe vos besoins avec notre équipe et nos experts ! Prenez l'accompagnement qu'il vous faut avec le déploiement le plus vite possible",
    });
    },
    calculateAmount(quantity, price) {
      return (parseFloat(quantity) * parseFloat(price)).toFixed(2);
    },
    calculateSubtotal() {
      let subtotal = 0;
      for (const item of this.items) {
        subtotal += parseFloat(this.calculateAmount(item.quantity, item.price));
      }
      return subtotal.toFixed(2);
    },
    calculateTotal() {
      const subtotal = parseFloat(this.calculateSubtotal());
      return subtotal.toFixed(2);
    },
  },
  watch: {
    selectedCurrency() {
      this.updateItemPrices();
    },
  },
  mounted() {
    this.updateCurrency();
  },
};
</script>

<style>

</style>
