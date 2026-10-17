const terminal=document.getElementById("terminal");

const archive={state:{active:true}};
const records=[
 [106,126,107,108,121],
 [124,128,121,109,107,128,121],
 [74,91,75],
 [130,56,117,105],
 [112,117,112,122,122],
 [102,74,59,119],
 [116,58,116,61,110],
 [116,110,120,61],
 [116,108,117,110,108],
 [116,109,118,124,116]
];

let index=0;

function loop(){
    if(!archive.state.active){
        terminal.textContent+="\n\n[OK] ARCHIVE LOOP STOPPED";
        terminal.textContent+="\n[OK] ARCHIVE PAYLOAD PRESERVED";
        return;
    }

    const record=records[index%records.length];
    const corrupted = index % 20 === 0 ? " <CORRUPTED>" : "";
    terminal.textContent+="\n[ARCH] ARCHIVE_"+String(index).padStart(5,"0")+" :: "+record.join("-")+corrupted;
    index++;
    terminal.scrollTop=terminal.scrollHeight;
    setTimeout(loop,25);
}
loop();
