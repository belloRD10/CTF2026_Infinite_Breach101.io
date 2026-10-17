const terminal=document.getElementById("terminal");

const node={state:{active:true}};

/*
 [INTRUSION DETECTED]
 These are encoded using XOR 0x2A.
 Decode each value with:
 value ^ 0x2A
 then interpret the result as ASCII.
*/
const packets=[
  [0x49,0x53,0x48,0x4F,0x58],
  [0x59,0x5F,0x58,0x4C,0x4F,0x58],
  [0x69,0x7E,0x68],
  [0x51,0x1B,0x4C,0x42],
  [0x4B,0x44,0x4B,0x5E,0x43],
  [0x75,0x69,0x1A,0x5A],
  [0x1F,0x69,0x46,0x1E],
  [0x47,0x1E,0x58,0x1F],
  [0x47,0x46,0x17],
  [0x47,0x47,0x52,0x55,0x4E,0x4F,0x47,0x46,0x4F]
];

let p=0;

function nodeLoop(){
    if(!node.state.active){
        terminal.textContent+="\n\n[HALTED] NODE PROCESS TERMINATED";
        terminal.textContent+="\n[STREAM] PACKET STREAM AVAILABLE";
        terminal.textContent+="\n[DISTORTION: "+(Math.random()*10).toFixed(2)+"]...";
        return;
    }

    const pkt = packets[p%packets.length];
    terminal.textContent+="\n[ENCRYPTED] NODE_PACKET["+p+"] => "+pkt.map(x=>"0x"+x.toString(16).toUpperCase()).join(" ");
    p++;
    terminal.scrollTop=terminal.scrollHeight;
    setTimeout(nodeLoop,32);
}
nodeLoop();
