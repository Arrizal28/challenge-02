function getAngkaTerbesarKedua(nilai){
    nilai.sort(function(a, b)
    {
        return b-a
    });

    return  nilai[1];
}

console.log(getAngkaTerbesarKedua([9, 4, 7, 7, 4, 3, 2, 2, 8]))