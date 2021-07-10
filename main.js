var file = document.getElementById('file');
var canvas = document.getElementById('canvas');

var canvasWidth = 512;
var canvasHeight = 512;
var uploadImgSrc;

// Canvasの準備
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var ctx = canvas.getContext('2d');

function loadLocalImage(e) {
    // ファイル情報を取得
    var fileData = e.target.files[0];

    // 画像ファイル以外は処理を止める
    if (!fileData.type.match('image.*')) {
        alert('画像を選択してください');
        return;
    }

    // FileReaderオブジェクトを使ってファイル読み込み
    var reader = new FileReader();
    // ファイル読み込みに成功したときの処理
    reader.onload = function () {
        // Canvas上に表示する
        uploadImgSrc = reader.result;
        canvasDraw();
    }
    // ファイル読み込みを実行
    reader.readAsDataURL(fileData);
}

// ファイルが指定された時にloadLocalImage()を実行
file.addEventListener('change', loadLocalImage, false);

// Canvas上に画像を表示する
function canvasDraw(imgSrc) {
    // canvas内の要素をクリアする
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Canvas上に画像を表示
    var img = new Image();
    img.src = uploadImgSrc;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvasWidth, this.height * (canvasWidth / this.width));

        // Canvas上にテキストを表示
        addText();

        // canvasを画像に変換
        var data = canvas.toDataURL();

        // 画像として出力
        var outputImg = document.createElement('img');
        outputImg.src = data;
        document.getElementById('result').appendChild(outputImg);
    }
}

function SetColor(imgSrc) {
    // canvas内の要素をクリアする
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Canvas上に画像を表示
    var img = new Image();
    img.src = uploadImgSrc;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvasWidth, this.height * (canvasWidth / this.width));

        // Canvas上にテキストを表示
        addText();

        // canvasを画像に変換
        var data = canvas.toDataURL();

        // 画像として出力
        var outputImg = document.createElement('img');
        outputImg.src = data;
        document.getElementById('result').appendChild(outputImg);
    }
}

function addText() {
    ctx.fillStyle = document.getElementById("c1").value;
    ctx.fillRect(0, 0, 32, 32);
    ctx.fillStyle = document.getElementById("c2").value;
    ctx.fillRect(480, 0, 32, 32);
    ctx.fillStyle = document.getElementById("c3").value;
    ctx.fillRect(480, 480, 32, 32);
    ctx.fillStyle = document.getElementById("c4").value;
    ctx.fillRect(0, 480, 32, 32);
}


