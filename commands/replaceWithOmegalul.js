module.exports = {

    name: 'replaceWithOmegalul',
    description: 'alternates capital and lowercase letters, replace o with omegalul',
    execute(message) {
        var temp = message.content;
    var temp2 = '';
    
    for (i=0; i<temp.length; i++) {
        if (temp.substring(i, i+1)==('e') || temp.substring(i, i+1)==('E')) {
            temp2 = temp2 + '<:e_:764347330341765130>';
           
        }
        else if (temp.substring(i, i+1)==('o') || temp.substring(i, i+1)==('O')) {
            temp2 = temp2 + '<:omegalul:755303090126848011>';
           
        } else temp2 = temp2 + temp.substring(i, i+1);
    }

   
    message.channel.send(temp2);
}
    }
