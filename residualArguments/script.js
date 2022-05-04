function showName(first, second, ...kly) {
    console.log(first + ' ' + second);
    for(i=0; i < kly.length; i++) {
        console.log(kly[i]);
    }
};
showName('Мишка', 'Иванов', "Леонид", 'Суфаилов', 'Креничев', 'Иван', 'Денис', 'Холодняк');
