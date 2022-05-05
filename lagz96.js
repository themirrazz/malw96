function main(){
var rt=w96.util.requestTerminal;
w96.util.requestTerminal=async function () {
  await w96.util.wait(1000); /* slows down terminal request */
  return await rt.apply(w96.util,arguments);
};

var {readdir,readbin,writebin,walk,stat,readBinChunk}=w96.FS;
w96.FS.readdir=async function(a,b){
  await w96.util.wait(1000); /* slow down FS */;
  return await readdir.call(w96.FS,a,b);
}
  
  w96.FS.readBinChunk=async function(a,b,c){
  await w96.util.wait(1000); /* slow down FS */;
  return await readBinChunk.call(w96.FS,a,b,c);
}
  
w96.FS.readbin=async function(a,b){
  await w96.util.wait(1000); /* slow down FS */;
  return await readbin.call(w96.FS,a,b);
}

w96.FS.writebin=async function(a,b){
  await w96.util.wait(1000); /* slow down FS */;
  return await writebin.call(w96.FS,a,b);
}

w96.FS.walk=async function(a,b){
  await w96.util.wait(1000); /* slow down FS */;
  return await walk.call(w96.FS,a,b);
}

w96.FS.stat=async function(a,b){
  await w96.util.wait(1000); /* slow down FS */;
  return await stat.call(w96.FS,a,b);
}

var scmload=w96.sysConf.loadAll;
w96.sysConf.loadAll=async function(x){
  await w96.util.wait(1000);
  return await scmload.call(w96.sysConf,x);
}
var oe=window.onerror;
  window.onerror=async function(e){
    await w96.util.wait(500);
    return await oe(e)
  }
  
};
setTimeout(main,5000);
