const $tableElement = $('#pixelCanvas');
const $inputWidth = $('#inputWidth');
const $inputHeight = $('#inputHeight');
const $colorPicker = $('#colorPicker');

$('#sizePicker').submit( event => {
    event.preventDefault();
    
    let height = $inputHeight.val();
    let width = $inputWidth.val();
    

    $tableElement.html(''); 

    makeGrid(height, width);
    addCellClickListener();
});


function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        $tableElement.append('<tr></tr>');
    };

    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};


function addCellClickListener() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};


