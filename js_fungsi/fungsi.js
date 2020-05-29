// var databarang = ["bukut tulis","pensil","penghapus"];

// function showbarang()
// {
//     var listbarang = document.getElementById("list-barang");
//     //clear list barang
//     listbarang.innerHTML ="";

//     //cetak semua barang
//     for (let i = 0; < databarang.length; i++) {
//         var btnedit = "<a href='#' onclick='editbarang("+i+")'>edit</a>";
//         var btnhapus= "<a href='#' onclick='deletebarang("+i+")'>hapus</a>";

//         listbarang.innerHTML += "<li>" + databarang[i] + "["+btnedit+" | "+btnhapus + "]</li>";
        
//     }
//     function addbarang()
//     {
//         var input = document.querySelector("input[name=barang]");
//         databarang.push(input.value);
//         showbarang();
//     }

//     function editbarang(id)
//     {
//         var newbarang = prompt("nama baru", databarang[id]);
//         databarang[id] = newbarang;
//         showbarang();
//     }

//     function deletebarang(id)
//     {
//         databarang.splice(id,1);
//         showbarang();
//     }
//     showbarang();
// }

var dataBarang = [
    "Buku Tulis",
    "Pensil",
    "Spidol"
];


dataBarang.push("ayam","kambing"); // nambah data dalam array pakai push


function showBarang(){
    var listBarang = document.getElementById("list-barang");
    // clear list barang
    listBarang.innerHTML = "";

    // cetak semua barang
    for(let i = 0; i < dataBarang.length; i++){
        var btnEdit = "<a href='#' onclick='editBarang("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteBarang("+i+")'>Hapus</a>";

        listBarang.innerHTML += "<li>" + dataBarang[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>";        
    }
}

function addBarang(){
    var input = document.querySelector("input[name=barang]");
    dataBarang.push(input.value);
    showBarang();
}

function editBarang(id){
    var newBarang = prompt("Nama baru", dataBarang[id]); //prompt mengembalikan inputan data dari pengguna
    dataBarang[id] = newBarang;
    showBarang();
}

function deleteBarang(id){
    dataBarang.splice(id, 1);
    showBarang();
}

showBarang();