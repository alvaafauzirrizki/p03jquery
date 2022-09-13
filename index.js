$(document).ready(function () {
    $("#nama_1").click(function () {
        confirm("Kamu Aryanto Trimukti, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Aryanto Trimukti");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_1").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_2").click(function () {
        confirm("Kamu Memilih Abdul Mukhyidin, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Abdul Mukhyidin");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_2").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_3").click(function () {
        confirm("Kamu Memilih Agung Saeful, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Agung Saeful");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_3").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_4").click(function () {
        confirm("Kamu Memilih Deni Prasetya, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Deni Prasetya");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_4").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_5").click(function () {
        confirm("Kamu Memilih Anwar setia, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Anwar setia");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_5").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_1").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Palimanan");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_1").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_2").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Gempol");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_2").innerHTML = nama;
        }
    });
});


$(document).ready(function () {
    $("#alamat_3").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Plumbon");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_3").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_4").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Ampera");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_4").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_5").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Gempol");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_5").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#button").click(function () {
        alert('Sorry Kamu Tidak Bisa Mengapus My Best Friend')
    });
});