// A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.
// Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, s, determine how many letters of the SOS message have been changed by radiation.

function marsExploration(s) {
    let count = 0;
    let sos = ['S', 'O', 'S'];
    const newArr = s.split('');
    while (newArr.length > 0) {
        const message = newArr.splice(0, 3);
        for (let i = 0; i < message.length; i++) {
            if (message[i] !== sos[i]) count++;
        }
    }
    return count
}