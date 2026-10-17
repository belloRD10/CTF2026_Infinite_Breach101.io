const terminal=document.getElementById("terminal");

const recovery={state:{active:true}};
const encrypted=[
  0x75,0x69,0x1A,0x69,0x1E,0x5A,0x1A,0x5D,
  0x69,0x1E,0x52,0x1E,0x47,0x1B,0x44,0x1E,
  0x4F,0x46
];

let counter=0;

function recoveryLoop(){
    if(!recovery.state.active){
    terminal.textContent+="\n\n[SECURITY BYPASS] ==============================";
    terminal.textContent+="\n[ALERT] RECOVERY LOOP TERMINATED";
    terminal.textContent+="\n[ACCESS] DATA CHANNEL AVAILABLE";
    terminal.textContent+="\n[ALERT] ==============================";
    terminal.textContent+="\n[ENCODED] PAYLOAD BLOCKS: "+encrypted.map(x=>x.toString(16).padStart(2,"0")).join(" ");
    return;
    }

    const err = counter % 15 === 0 ? " [SYSTEM OVERLOAD]" : "";
    terminal.textContent+="\n[REC] RECOVERY["+counter+"] :: PROCESSING"+err;
    counter++;
    terminal.scrollTop=terminal.scrollHeight;
    setTimeout(recoveryLoop,18);
}

/*
 [CRITICAL WARNING]
 Final payload is XOR encoded.
 Do not search for a plaintext flag in this file.
 THE SYSTEM IS IN RECOVERY LOCKDOWN
*/
recoveryLoop();
