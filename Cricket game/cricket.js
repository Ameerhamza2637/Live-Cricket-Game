/*
task1
var fname=prompt("enter your first name");
var lname=prompt("enter your last name");
var fullname=fname+" "+lname;
document.write(fullname);

task2
var mobile=prompt("enter your Fav mobile name and model");
var nlen=mobile.length;
document.write("length of string is = ",nlen);


var letter="Pakistan is the best place";
document.write("string is = ",letter);
document.write("<br>");
var index= letter.indexOf("n");
document.write("Position of n in the string is = ",index,"<br>");


var letter="Hello world";
document.write("string is = ",letter);
document.write("<br>");
var index= letter.lastIndexOf("l");
document.write("Position of L in the string is = ",index);*/ 
var scoret1=0;
var scoret2=0;
var randscore=0;
var head=1;
var overno=1;
var out=0;


var overs=prompt("Enter number of overs");
var team1=prompt("Enter name of Team 1");
var team2=prompt("Enter name of Team 2");


var weather = (Math.random()*3)+1;
weather = Math.floor(weather);
var decision = (Math.random()*overs);
decision = Math.floor(decision);

function delay(ms)
{
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function cricket()
{
    await delay(1000);
    document.write("Match is between ",team1," and ",team2,"<br>");
    var toss=prompt("Team 1 choose head or tails");
    var randomval=(Math.random()*2)+1;
    randomval=Math.floor(randomval);
    if(toss==="head"||toss==="Head")
    {
        if(head===randomval)
        {
            await delay(3000);
            document.write("Its head ",team1," won the toss ");
            document.write("<br>");

            await delay(1000);
            document.write(" Winner team will go for bat ");
            document.write("<br>");

            await delay(2000);
            document.write(overs," Overs match started, ",team1," is to bat.")
            document.write("<br>");
            document.write("<br>");
            document.write("<br>");

            for(var i=0;i<overs;i++)
            {
                if(decision===i)
                    {
                        if(weather===1)
                        {
                            document.write("<br>");
                            document.write("<br>");
                            document.write("weather is fogy")
                            document.write("<br>");
                            document.write("<br>");
                            await delay(10000);
                        }
                        else if(weather===2)
                        {
                            document.write("<br>");
                            document.write("<br>");
                            document.write("rain starts")
                            document.write("<br>");
                            document.write("<br>");
                            await delay(5000);
                        }
                    }
                document.write("Over # ",overno," started");
                document.write("<br>");
                for(var j=0;j<6;j++)
                {
                    randscore=(Math.random()*7);
                    randscore=Math.floor(randscore);
                    if(randscore===0)
                    {
                        await delay(2000);
                        document.write("Its Out");
                        document.write("<br>");
                        ++out;
                    }
                    else if(randscore===1)
                    {
                        await delay(1000);
                        document.write("Its 1");
                        document.write("<br>");
                    }
                    else if(randscore===2)
                    {
                        await delay(1000);
                        document.write("Its 2");
                        document.write("<br>");
                    }
                    else if(randscore===3)
                    {
                        await delay(1000);
                        document.write("Its 3");
                        document.write("<br>");
                    }
                    else if(randscore===4)
                    {
                        await delay(1000);
                        document.write("Its a beautiful 4");
                        document.write("<br>");
                    }
                    else if(randscore===5)
                    {
                        await delay(1000);
                        document.write("Dot ball");
                        document.write("<br>");
                        randscore=0;
                    }
                    else if(randscore===6)
                    {
                        await delay(1000);
                        document.write("Its a long long six");
                        document.write("<br>");
                    }
                    scoret1=scoret1+randscore;
                }
                document.write("Score: ",scoret1," / ",out);
                document.write("<br>");
                document.write("<br>");
                document.write("<br>");
                ++overno;
            }


            randscore=0;
            overno=1;
            out=0;
            document.write("Now ",team2," is batting");
            document.write("<br>");

            weather = (Math.random()*3)+1;
            weather = Math.floor(weather);
            decision = (Math.random()*overs);
            decision = Math.floor(decision);

            for(var i=0;i<overs;i++)
            {

                if(decision===i)
                {
                    if(weather===1)
                    {
                        document.write("<br>");
                        document.write("<br>");
                        document.write("weather is fogy")
                        document.write("<br>");
                        document.write("<br>");
                        await delay(10000);
                    }
                    else if(weather===2)
                    {
                        document.write("<br>");
                        document.write("<br>");
                        document.write("rain starts")
                        document.write("<br>");
                        document.write("<br>");
                        await delay(5000);
                    }
                }
                document.write("Over # ",overno," started");
                document.write("<br>");
                document.write("<br>");
                for(var j=0;j<6;j++)
                {
                    randscore=(Math.random()*7);
                    randscore=Math.floor(randscore);
                    if(randscore===0)
                    {
                        await delay(2000);
                        document.write("Its Out");
                        document.write("<br>");
                        ++out;
                    }
                    else if(randscore===1)
                    {
                        await delay(1000);
                        document.write("Its 1");
                        document.write("<br>");
                    }
                    else if(randscore===2)
                    {
                        await delay(1000);
                        document.write("Its 2");
                        document.write("<br>");
                    }
                    else if(randscore===3)
                    {
                        await delay(1000);
                        document.write("Its 3");
                        document.write("<br>");
                    }
                    else if(randscore===4)
                    {
                        await delay(1000);
                        document.write("Its a beautiful 4");
                        document.write("<br>");
                    }
                    else if(randscore===5)
                    {
                        await delay(1000);
                        document.write("Dot ball");
                        document.write("<br>");
                        randscore=0;
                    }
                    else if(randscore===6)
                    {
                        await delay(1000);
                        document.write("Its a long long six");
                        document.write("<br>");
                    }
                    scoret2=scoret2+randscore;
                }
                document.write("Score: ",scoret2," / ",out);
                document.write("<br>");
                document.write("<br>");
                document.write("<br>");
                ++overno;
            }
            document.write("Team 1 score = ",scoret1," / ",out);
            document.write("<br>");
            document.write("Team 2 score = ",scoret2," / ",out);
            document.write("<br>");
            document.write("<br>");
            if(scoret1>scoret2)
            {
                document.write("Team 1 is winnner")
                document.write("<br>");
            }
            else
            {
                document.write("Team 2 is winnner")
                document.write("<br>");
            }
        }
        else
        {
            await delay(3000);
            document.write("Its tail ",team2," won the toss ");
            document.write("<br>");

            await delay(1000);
            document.write(" Winner team will go for bat ");
            document.write("<br>");

            await delay(2000);
            document.write(overs," Overs match started, ",team2," is to bat.")
            document.write("<br>");
            document.write("<br>");
            document.write("<br>");
            for(var i=0;i<overs;i++)
            {

                if(decision===i)
                    {
                        if(weather===1)
                        {
                            document.write("<br>");
                            document.write("<br>");
                            document.write("weather is fogy")
                            document.write("<br>");
                            document.write("<br>");
                            await delay(10000);
                        }
                        else if(weather===2)
                        {
                            document.write("<br>");
                            document.write("<br>");
                            document.write("rain starts")
                            document.write("<br>");
                            document.write("<br>");
                            await delay(5000);
                        }
                    }

                document.write("Over # ",overno," started");
                document.write("<br>");
                document.write("<br>");
                for(var j=0;j<6;j++)
                {
                    randscore=(Math.random()*7);
                    randscore=Math.floor(randscore);
                    if(randscore===0)
                    {
                        await delay(2000);
                        document.write("Its Out");
                        document.write("<br>");
                        ++out;
                    }
                    else if(randscore===1)
                    {
                        await delay(1000);
                        document.write("Its 1");
                        document.write("<br>");
                    }
                    else if(randscore===2)
                    {
                        await delay(1000);
                        document.write("Its 2");
                        document.write("<br>");
                    }
                    else if(randscore===3)
                    {
                        await delay(1000);
                        document.write("Its 3");
                        document.write("<br>");
                    }
                    else if(randscore===4)
                    {
                        await delay(1000);
                        document.write("Its a beautiful 4");
                        document.write("<br>");
                    }
                    else if(randscore===5)
                    {
                        await delay(1000);
                        document.write("Dot ball");
                        document.write("<br>");
                        randscore=0;
                    }
                    else if(randscore===6)
                    {
                        await delay(1000);
                        document.write("Its a long long six");
                        document.write("<br>");
                    }
                    scoret2=scoret2+randscore;
                }
                document.write("Score: ",scoret2," / ",out);
                document.write("<br>");
                document.write("<br>");
                document.write("<br>");
                ++overno;
            }
            randscore=0;
            overno=1;
            out=0;
            document.write("Now ",team1," is batting");
            document.write("<br>");

            weather = (Math.random()*3)+1;
            weather = Math.floor(weather);
            decision = (Math.random()*overs);
            decision = Math.floor(decision);

            for(var i=0;i<overs;i++)
            {

                if(decision===i)
                    {
                        if(weather===1)
                        {
                            document.write("<br>");
                            document.write("<br>");
                            document.write("weather is fogy")
                            document.write("<br>");
                            document.write("<br>");
                            await delay(10000);
                        }
                        else if(weather===2)
                        {
                            document.write("<br>");
                            document.write("<br>");
                            document.write("rain starts")
                            document.write("<br>");
                            document.write("<br>");
                            await delay(5000);
                        }
                    }

                document.write("Over # ",overno," started");
                document.write("<br>");
                for(var j=0;j<6;j++)
                {
                    randscore=(Math.random()*7);
                    randscore=Math.floor(randscore);
                    if(randscore===0)
                    {
                        await delay(2000);
                        document.write("Its Out");
                        document.write("<br>");
                        ++out;
                    }
                    else if(randscore===1)
                    {
                        await delay(1000);
                        document.write("Its 1");
                        document.write("<br>");
                    }
                    else if(randscore===2)
                    {
                        await delay(1000);
                        document.write("Its 2");
                        document.write("<br>");
                    }
                    else if(randscore===3)
                    {
                        await delay(1000);
                        document.write("Its 3");
                        document.write("<br>");
                    }
                    else if(randscore===4)
                    {
                        await delay(1000);
                        document.write("Its a beautiful 4");
                        document.write("<br>");
                    }
                    else if(randscore===6)
                    {
                        await delay(1000);
                        document.write("Its a long long six");
                        document.write("<br>");
                    }
                    scoret1=scoret1+randscore;
                }
                document.write("Score: ",scoret1," / ",out);
                document.write("<br>");
                document.write("<br>");
                ++overno;
            }
            document.write("Team 1 score = ",scoret1," / ",out);
            document.write("<br>");
            document.write("Team 2 score = ",scoret2," / ",out);
            document.write("<br>");
            if(scoret1>scoret2)
            {
                document.write("Team 1 is winnner")
                document.write("<br>");
            }
            else
            {
                document.write("Team 2 is winnner")
                document.write("<br>");
            }  
        }
    }
    else
    {
        if(head===randomval)
        {
            await delay(3000);
            document.write("Its head ",team2," won the toss ");
            document.write("<br>");

            await delay(1000);
            document.write(" Winner team will go for bat ");
            document.write("<br>");

            await delay(2000);
            document.write(overs," Overs match started, ",team2," is to bat.")
            document.write("<br>");
            document.write("<br>");
            document.write("<br>");

                    for(var i=0;i<overs;i++)
                    {
                        if(decision===i)
                        {
                            if(weather===1)
                            {
                                document.write("<br>");
                                document.write("<br>");
                                document.write("weather is fogy")
                                document.write("<br>");
                                document.write("<br>");
                                await delay(10000);
                            }
                            else if(weather===2)
                            {
                                document.write("<br>");
                                document.write("<br>");
                                document.write("rain starts")
                                document.write("<br>");
                                document.write("<br>");
                                await delay(5000);
                            }
                        }

                        document.write("Over # ",overno," started");
                        document.write("<br>");
                        for(var j=0;j<6;j++)
                        {
                            randscore=(Math.random()*7);
                            randscore=Math.floor(randscore);
                            if(randscore===0)
                            {
                                await delay(2000);
                                document.write("Its Out");
                                document.write("<br>");
                                ++out;
                            }
                            else if(randscore===1)
                            {
                                await delay(1000);
                                document.write("Its 1");
                                document.write("<br>");
                            }
                            else if(randscore===2)
                            {
                                await delay(1000);
                                document.write("Its 2");
                                document.write("<br>");
                            }
                            else if(randscore===3)
                            {
                                await delay(1000);
                                document.write("Its 3");
                                document.write("<br>");
                            }
                            else if(randscore===4)
                            {
                                await delay(1000);
                                document.write("Its a beautiful 4");
                                document.write("<br>");
                            }
                            else if(randscore===5)
                            {
                                await delay(1000);
                                document.write("Dot ball");
                                document.write("<br>");
                                randscore=0;
                            }
                            else if(randscore===6)
                            {
                                await delay(1000);
                                document.write("Its a long long six");
                                document.write("<br>");
                            }
                            scoret2=scoret2+randscore;
                        }
                        document.write("Score: ",scoret2," / ",out);
                        document.write("<br>");
                        document.write("<br>");
                        document.write("<br>");
                        ++overno;
                    }
                    randscore=0;
                    overno=1;
                    out=0;
                    document.write("Now ",team1," is batting");
                    document.write("<br>");
                    document.write("<br>");

                    weather = (Math.random()*3)+1;
                    weather = Math.floor(weather);
                    decision = (Math.random()*overs);
                    decision = Math.floor(decision);

                    for(var i=0;i<overs;i++)
                    {
                        if(decision===i)
                        {
                            if(weather===1)
                            {
                                document.write("<br>");
                                document.write("<br>");
                                document.write("weather is fogy")
                                document.write("<br>");
                                document.write("<br>");
                                await delay(10000);
                            }
                            else if(weather===2)
                            {
                                document.write("<br>");
                                document.write("<br>");
                                document.write("rain starts")
                                document.write("<br>");
                                document.write("<br>");
                                await delay(5000);
                            }
                        }
                        document.write("Over # ",overno," started");
                        document.write("<br>");
                        for(var j=0;j<6;j++)
                        {
                            randscore=(Math.random()*7);
                            randscore=Math.floor(randscore);
                            if(randscore===0)
                            {
                                await delay(2000);
                                document.write("Its Out");
                                document.write("<br>");
                                ++out;
                            }
                            else if(randscore===1)
                            {
                                await delay(1000);
                                document.write("Its 1");
                                document.write("<br>");
                            }
                            else if(randscore===2)
                            {
                                await delay(1000);
                                document.write("Its 2");
                                document.write("<br>");
                            }
                            else if(randscore===3)
                            {
                                await delay(1000);
                                document.write("Its 3");
                                document.write("<br>");
                            }
                            else if(randscore===5)
                            {
                                await delay(1000);
                                document.write("Dot ball");
                                document.write("<br>");
                                randscore=0;
                            }
                            else if(randscore===4)
                            {
                                await delay(1000);
                                document.write("Its a beautiful 4");
                                document.write("<br>");
                            }
                            else if(randscore===6)
                            {
                                await delay(1000);
                                document.write("Its a long long six");
                                document.write("<br>");                        
                                scoret1=scoret1+randscore;
                            }
                        }
                        document.write("Score: ",scoret1," / ",out);
                        document.write("<br>");
                        document.write("<br>");
                        ++overno;
                    }
                    document.write("Team 1 score = ",scoret1," / ",out);
                    document.write("<br>");
                    document.write("Team 2 score = ",scoret2," / ",out);
                    document.write("<br>");
                    document.write("<br>");
                    document.write("<br>");
                    if(scoret1>scoret2)
                    {
                        document.write("Team 1 is winnner")
                        document.write("<br>");
                    }
                    else
                    {
                        document.write("Team 2 is winnner");
                        document.write("<br>");
                    }
        }
        else
        {
            await delay(3000);
            document.write("Its tail ",team1," won the toss ");
            document.write("<br>");

            await delay(1000);
            document.write(" Winner team will go for bat ");
            document.write("<br>");

            await delay(2000);
            document.write(overs," Overs match started, ",team1," is to bat.")
            document.write("<br>");
            document.write("<br>");
            document.write("<br>");
            for(var i=0;i<overs;i++)
            {
                if(decision===i)
                {
                    if(weather===1)
                    {
                        document.write("<br>");
                        document.write("<br>");
                        document.write("weather is fogy")
                        document.write("<br>");
                        document.write("<br>");
                        await delay(10000);
                    }
                    else if(weather===2)
                    {
                        document.write("<br>");
                        document.write("<br>");
                        document.write("rain starts")
                        document.write("<br>");
                        document.write("<br>");
                        await delay(5000);
                    }
                }
                document.write("Over # ",overno," started");
                document.write("<br>");
                for(var j=0;j<6;j++)
                {
                    randscore=(Math.random()*7);
                    randscore=Math.floor(randscore);
                    if(randscore===0)
                    {
                        await delay(2000);
                        document.write("Its Out");
                        document.write("<br>");
                        ++out;
                    }
                    else if(randscore===1)
                    {
                        await delay(1000);
                        document.write("Its 1");
                        document.write("<br>");
                    }
                    else if(randscore===2)
                    {
                        await delay(1000);
                        document.write("Its 2");
                        document.write("<br>");
                    }
                    else if(randscore===3)
                    {
                        await delay(1000);
                        document.write("Its 3");
                        document.write("<br>");
                    }
                    else if(randscore===4)
                    {
                        await delay(1000);
                        document.write("Its a beautiful 4");
                        document.write("<br>");
                    }
                    else if(randscore===5)
                    {
                        await delay(1000);
                        document.write("Dot ball");
                        document.write("<br>");
                        randscore=0;
                    }
                    else if(randscore===6)
                    {
                        await delay(1000);
                        document.write("Its a long long six");
                        document.write("<br>");
                    }
                    scoret1=scoret1+randscore;
                }
                document.write("Score: ",scoret1," / ",out);
                document.write("<br>");
                document.write("<br>");
                document.write("<br>");
                ++overno;
            }
            randscore=0;
            overno=1;
            out=0;
            document.write("Now ",team2," is batting");
            document.write("<br>");
            document.write("<br>");

            weather = (Math.random()*3)+1;
            weather = Math.floor(weather);
            decision = (Math.random()*overs);
            decision = Math.floor(decision);
            
            for(var i=0;i<overs;i++)
            {
                if(decision===i)
                {
                    if(weather===1)
                    {
                        document.write("<br>");
                        document.write("<br>");
                        document.write("weather is fogy")
                        document.write("<br>");
                        document.write("<br>");
                        await delay(10000);
                    }
                    else if(weather===2)
                    {
                        document.write("<br>");
                        document.write("<br>");
                        document.write("rain starts")
                        document.write("<br>");
                        document.write("<br>");
                        await delay(5000);
                    }
                }

                document.write("Over # ",overno," started");
                document.write("<br>");
                for(var j=0;j<6;j++)
                {
                    randscore=(Math.random()*7);
                    randscore=Math.floor(randscore);
                    if(randscore===0)
                    {
                        await delay(2000);
                        document.write("Its Out");
                        document.write("<br>");
                        ++out;
                    }
                    else if(randscore===1)
                    {
                        await delay(1000);
                        document.write("Its 1");
                        document.write("<br>");
                    }
                    else if(randscore===2)
                    {
                        await delay(1000);
                        document.write("Its 2");
                        document.write("<br>");
                    }
                    else if(randscore===3)
                    {
                        await delay(1000);
                        document.write("Its 3");
                        document.write("<br>");
                    }
                    else if(randscore===4)
                    {
                        await delay(1000);
                        document.write("Its a beautiful 4");
                        document.write("<br>");
                    }
                    else if(randscore===5)
                    {
                        await delay(1000);
                        document.write("Dot ball");
                        document.write("<br>");
                        randscore=0;
                    }
                    else if(randscore===6)
                    {
                        await delay(1000);
                        document.write("Its a long long six");
                        document.write("<br>");
                    }
                    scoret2=scoret2+randscore;
                }
                document.write("Score: ",scoret2," / ",out);
                document.write("<br>");
                document.write("<br>");
                document.write("<br>");
                ++overno;
            }
            document.write("Team 1 score = ",scoret1," / ",out);
            document.write("<br>");
            document.write("Team 2 score = ",scoret2," / ",out);
            document.write("<br>");
            if(scoret1>scoret2)
            {
                document.write("Team 1 is winnner")
                document.write("<br>");
            }
            else
            {
                document.write("Team 2 is winnner")
                document.write("<br>");
            }
        }
    }
}
cricket();