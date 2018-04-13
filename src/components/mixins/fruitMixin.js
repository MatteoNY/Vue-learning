export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon', 'Howdy'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {

          const searchTermCaseInsensitive = new RegExp(this.filterText, 'i');
            return this.fruits.filter((element) => {
           //   console.log ('filtered by', searchTermCaseInsensitive);
              //  return element.match(this.filterText);
                return element.match(searchTermCaseInsensitive);
            });
        }
    },
    created() {
        console.log('Created');
    }
};
