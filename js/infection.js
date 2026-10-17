const terminal=document.getElementById("terminal");

const engine={state:{active:true}};
const words=["SYSTEM","BREACH","NODE","ARCHIVE","ERROR","SIGNAL","VECTOR","UNKNOWN","RECONNECT","ACCESS"];
const numbers=[7319,4821,9931,1742,6501,8812,4207];

function randomItem(a){return a[Math.floor(Math.random()*a.length)];}

function generate(){
    if(!engine.state.active){
        terminal.textContent+="\n\n[CRITICAL] INFECTION LOOP TERMINATED";
        terminal.textContent+="\n[ACCESS GRANTED] DATA CHANNEL UNLOCKED";
        terminal.textContent+="\n[WARNING] CONTINUE ON OTHER NODES...";
        return;
    }

    const mode=Math.floor(Math.random()*5);
    let output;
    const line = Math.random() < 0.1 ? "***** MALWARE SPREADING *****" : null;

    if(line){
        output = line;
    } else if(mode===0) output=randomItem(words);
    else if(mode===1) output=randomItem(numbers);
    else if(mode===2) output="0x"+Math.floor(Math.random()*0xFFFFFF).toString(16).toUpperCase();
    else if(mode===3) output="PID-"+Math.floor(Math.random()*99999);
    else output=["WAKE","SLEEP","TRACE","NULL","0x00","MUTATE","CORRUPT"][Math.floor(Math.random()*7)];

    terminal.textContent+="\n[BREACH::"+Date.now().toString().slice(-6)+"] "+output;
    terminal.scrollTop=terminal.scrollHeight;
    setTimeout(generate,12);
}
generate();

/*
 [!CRITICAL!]
 The attacker left a state controller in the global scope.
 The recovery pages contain additional encoded fragments.
 
 TRY: engine.state.active = false
 
 BUT WATCH OUT... THERE MIGHT BE MORE...
*/
