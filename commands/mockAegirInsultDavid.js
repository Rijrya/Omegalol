module.exports = {
    name: 'mockAegirInsultDavid',
    description: 'alternates capital and lowercase letters for aegir, tells david to shut up',
    execute(message) {
    
    //tell david to shut up
     if (message.member.roles.cache.has('707097003846533181')) {
        message.channel.send("shut up");
    }


    //alternates capital and lowercase letters for aegir
    if (!message.member.roles.cache.has('707096662169878630')) return;
    var temp = message.content;
    temp = temp.toLowerCase();
    var temp2 = '';
    var rand = Math.random();
    var firstCh = new Boolean(false);
    if (rand>0.5) {
        firstCh = true;
    } else firstCh = false;

    for (i=0; i<temp.length; i++) {
        temp = temp.toLowerCase();
        if (firstCh) {
            if (temp.substring(i, i+1)==('o') || temp.substring(i, i+1)==('O')) {
                temp2 = temp2 + '<:omegalul:755303090126848011>';
               
            }else if (temp.substring(i, i+1)==('o') || temp.substring(i, i+1)==('O')) {
                temp2 = temp2 + '<:omegalul:755303090126848011>';
               
            } else 
        if (i%2==0) {
            temp2 = temp2 + temp.substring(i, i+1);
        } else {
            temp = temp.toUpperCase();
            temp2 = temp2 + temp.substring(i, i+1);
        }
    } else {
        if (temp.substring(i, i+1)==('o') || temp.substring(i, i+1)==('O')) {
            temp2 = temp2 + '<:omegalul:755303090126848011>';
           
        }else if (temp.substring(i, i+1)==('o') || temp.substring(i, i+1)==('O')) {
            temp2 = temp2 + '<:omegalul:755303090126848011>';
           
        } else
        if (i%2==1) {
            temp2 = temp2 + temp.substring(i, i+1);
        } else {
            temp = temp.toUpperCase();
            temp2 = temp2 + temp.substring(i, i+1);
        } 
    }
    }
    message.channel.send(temp2);
    }
}