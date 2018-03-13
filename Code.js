var Alexa=require('alexa-sdk');

const months=['January','February','March','April','May','June','July','August','September','October','November','December','january','february','march','april','may','june','july','august','september','october','november','december'];
const categories=['miscellaneous','emergency','housing','savings','utilities','health care','debt','groceries','personal care','entertainment'];



var handlers={

//To do
'LaunchRequest': function() {
	var cardTitle="Sample Invocations";
	const cardContent = "-> Initial setup: Set the year and month first\n" +
"start the year {year} (say 2018)\n" +
"set the month to {month} (say May)\n" +
"Now, you will be able to log your expenses for May 2018.\n" +
"When the month changes, again use \"set the month\"  to set the month to the new month. Use the utterance for starting the year when the year changes\n" +
"-> Know the categories underneath which you shall be logging\n" +
"list all categories\n" +
"tell me about category {category}\n" +
"You can know about what kind of expenses to log under what category using the latter command.\n" +
"-> Logging your expenses\n" +
"add dollar {dollar} and {cents} cents under the category {category}\n" +
"This logs your expenditure in the currently set month and year. Note that you need to mention the expense in both dollar and cents.\n" +
"-> Updating the expense at a later point in time\n" +
"update {category} from {month} {year} to dollar {dollar} and {cents} cents\n" +
"This will update your expense for the specified category in the specified month and year.\n" +
"-> Undo add expense\n" +
"You can also undo adding expenses for present month and year with the utterance \"undo.\"\n" +
"-> Listing all available records\n" +
"list all records\n" +
"-> Deleting records\n"+
"Remove the record for the year {year}\n"+
"Remove the record for the month {month} {year}\n"+
"Reset everything: simply disable and re enable the skill\n\n"+
"-> Analysis\n" +
"->Know the category stats\n" +
"tell me the expenses for the category {category} for the present month\n" +
"tell me stats for the category {category} for the present year\n" +
"tell me the stats for the category {category} during the year {year}\n" +
"tell expenses for category {category} for the month {month} {year}\n" +
"-> Generate reports across all categories\n" +
"generate report for the year {year}\n" +
"generate report for present month\n" +
"show the report for the month {month} {year}\n" +
"generate present year's report\n" +
"-> Order categories by expenditure for present month\n" +
"order categories by expenditure\n" +
"-> Comparison month on month\n" +
"compare {monthone} {yearone} to {monthtwo} {yeartwo}\n" +
"-> Setting up a threshold (trying to keep your expenses under a particular amount)\n" +
"set the threshold to dollar {dollar} point {cents}\n" +
"how far am I from the threshold\n" +
"Know how far you are from the threshold with the latter command.\n" +
"-> Calculate a success factor\n" +
"calculate my success factor\n" +
"Know how many times in the year you were successful in keeping your total expenses below the threshold.\n" +
"-> Further help, assistance and feature requests\n" +
"Reach out directly to the developer at priyankar.kumar98@gmail.com\n";
	var speechOutput="Sample Invocations are on a card in the app. What would you like to do?";
	this.emit(':askWithCard',speechOutput,speechOutput,cardTitle,cardContent);
},

'AMAZON.HelpIntent':function(){
	var cardTitle="Sample Invocations";
const cardContent = "-> Initial setup: Set the year and month first\n" +
"start the year {year} (say 2018)\n" +
"set the month to {month} (say May)\n" +
"Now, you will be able to log your expenses for May 2018.\n" +
"When the month changes, again use \"set the month\"  to set the month to the new month. Use the utterance for starting the year when the year changes\n" +
"-> Know the categories underneath which you shall be logging\n" +
"list all categories\n" +
"tell me about category {category}\n" +
"You can know about what kind of expenses to log under what category using the latter command.\n" +
"-> Logging your expenses\n" +
"add dollar {dollar} and {cents} cents under the category {category}\n" +
"This logs your expenditure in the currently set month and year. Note that you need to mention the expense in both dollar and cents.\n" +
"-> Updating the expense at a later point in time\n" +
"update {category} from {month} {year} to dollar {dollar} and {cents} cents\n" +
"This will update your expense for the specified category in the specified month and year.\n" +
"-> Undo add expense\n" +
"You can also undo adding expenses for present month and year with the utterance \"undo.\"\n" +
"-> Listing all available records\n" +
"list all records\n" +
"-> Deleting records\n"+
"Remove the record for the year {year}\n"+
"Remove the record for the month {month} {year}\n"+
"Reset everything: simply disable and re enable the skill\n\n"+
"-> Analysis\n" +
"->Know the category stats\n" +
"tell me the expenses for the category {category} for the present month\n" +
"tell me stats for the category {category} for the present year\n" +
"tell me the stats for the category {category} during the year {year}\n" +
"tell expenses for category {category} for the month {month} {year}\n" +
"-> Generate reports across all categories\n" +
"generate report for the year {year}\n" +
"generate report for present month\n" +
"show the report for the month {month} {year}\n" +
"generate present year's report\n" +
"-> Order categories by expenditure for present month\n" +
"order categories by expenditure\n" +
"-> Comparison month on month\n" +
"compare {monthone} {yearone} to {monthtwo} {yeartwo}\n" +
"-> Setting up a threshold (trying to keep your expenses under a particular amount)\n" +
"set the threshold to dollar {dollar} point {cents}\n" +
"how far am I from the threshold\n" +
"Know how far you are from the threshold with the latter command.\n" +
"-> Calculate a success factor\n" +
"calculate my success factor\n" +
"Know how many times in the year you were successful in keeping your total expenses below the threshold.\n" +
"-> Further help, assistance and feature requests\n" +
"Reach out directly to the developer at priyankar.kumar98@gmail.com\n";
	var speechOutput="Sample Invocations are on a card in the app. Some extra tips would be, set the year and month first. Make sure you mention expenditures in terms of both dollar an cents. What would you like to do?";
	this.emit(':askWithCard',speechOutput,speechOutput,cardTitle,cardContent);

 },

'AMAZON.StopIntent': function() {
        this.response.speak('Ok, see you again soon.');
        this.emit(':saveState', true);
        this.emit(':responseReady');
 },

    // Cancel
 'AMAZON.CancelIntent': function() {
        this.response.speak('Ok.');
         this.emit(':saveState', true);
        this.emit(':responseReady');
 },

 'Unhandled':function(){
  	this.emit(':tell',"I am sorry. I did'nt understand what you just said. Please ask for help for further help");
 },

 'StartYear':function(){
     
 	let year=parseInt(this.event.request.intent.slots.year.value);
 	if(String(year)==='undefined'||isNaN(year))
 	    this.emit(':tell',"I didn't quite get that. Please try again!");
 	if(year in this.attributes)
 	    this.emit(':tell','Records for the year already exist. ');
 	var cardTitle="Year set to "+year;
 	var cardContent="The year has been set to "+year;
 	this.attributes[year]={};
 	this.attributes["presentDetails"]={
 	    "year":year,
 	};
 	this.attributes["history"]=[];
 	this.emit(':saveState',true);
 	this.emit(':tellWithCard',cardContent,cardTitle,cardContent);
 },
 
 'RemoveYear':function(){
     let year=parseInt(this.event.request.intent.slots.year.value);
 	if(String(year)==='undefined'||isNaN(year))
 	    this.emit(':tell',"I didn't quite get that. Please try again!");
 	if(!(year in this.attributes))
 	    this.emit(':tell','Records for the year do not exist. ');
 	else{
 	   
        if(year===this.attributes["presentDetails"]["year"])
          {  
              delete this.attributes[year];
              delete this.attributes["presentDetails"];
              this.emit(':saveState',true);
              let cardTitle="Removed record for the year "+year;
 	          let cardContent=cardTitle;
 	          let speechOutput=cardTitle;
 	          this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
          }
        else{
        delete this.attributes[year];
 	    this.emit(':saveState',true);
 	    let cardTitle="Removed record for the year "+year;
 	    let cardContent=cardTitle;
 	    let speechOutput=cardTitle;
 	    this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
        }
 	}
 },
 
 'RemoveMonth':function(){
   let month=String(this.event.request.intent.slots.year.value);
   let year=parseInt(this.event.request.intent.slots.year.value);
   if(String(year)==='undefined'||isNaN(year))
 	    this.emit(':tell',"I didn't quite get that. Please try again! Specify both the month and the year.");
   	if(!(year in this.attributes))
 	    this.emit(':tell','Records for the year do not exist. ');
 	if(months.indexOf(month)===-1)
 	    this.emit(':tell','Please specify a valid month.');
 	if(!(month in this.attributes[year]))
 	    this.emit(':tell','No records for that period exist');
 	else{
 	     
 	     if(this.attributes["presentDetails"]["year"]===year&&this.attributes["presentDetails"]["month"]===month)
 	     {
 	        delete this.attributes["presentDetails"]["month"];
 	        delete this.attributes[year][month];
 	        this.emit(':saveState',true);
 	        let cardTitle="Removed record for "+month+","+year;
 	        let cardContent=cardTitle;
 	        let speechOutput=cardTitle;
 	        this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
 	        
 	     }
 	    else{
 	    delete this.attributes[year][month];
 	    this.emit(':saveState',true);
 	    let cardTitle="Removed record for "+month+","+year;
 	    let cardContent=cardTitle;
 	    let speechOutput=cardTitle;
 	    this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
 	    }
 	  }
   
   
 },

 'StartMonth': function(){
 	var month=String(this.event.request.intent.slots.month.value);
 	if(String(month)==='undefined'||months.indexOf(month)===-1)
 	    this.emit(':tell','That was an invalid month. Please try again!');
 	if(Object.keys(this.attributes).length===0)
 	    this.emit(':tell',"You haven't set the year yet. Please set the year. Ask for help for further help.");
 	if(!("presentDetails" in this.attributes))
        this.emit(':tell','The year and month have not been set yet. Please set those or ask for help for further help.');
 	this.attributes["presentDetails"]["month"]=month;
 	const year=this.attributes.presentDetails.year;
 	if(month in this.attributes[year])
 	    this.emit(':tell','Record for the month mentioned already exists.');
 	//Store money in cents to keep things simple
 	this.attributes[year][month]={
 	  "emergency":0,
 	  "housing":0,
 	  "savings":0,
 	  "utilities":0,
 	  "health care":0,
 	  "debt":0,
 	  "groceries":0,
 	  "personal care":0,
 	  "entertainment":0,
 	  "miscellaneous":0,
 	  "threshold":0,
 	};
 	this.attributes["presentDetails"]["month"]=month;
 	this.emit(':saveState',true);
 	var cardTitle="Month set to "+month;
 	var cardContent="The month has been set to "+month;
 	this.emit(':tellWithCard',cardContent,cardTitle,cardContent);
 },
 
 'ListAllCategories': function()
 {
     let cardTitle="Available Categories";
     let cardContent="miscellaneous \n emergency \n housing \n savings \n utilities \n health care \n debt \n groceries \n personal care \n entertainment";
     let speechOutput="The available categories are miscellaneous, emergency, housing, savings, utilities, health care, debt, groceries, personal care and entertainment";
     this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);     
 },
 
 'ParticularCategoryInfo':function(){
   let category=String(this.event.request.intent.slots.category.value);
   if(category.indexOf(" ")!==-1)
    category.split(' ').join('').toLowerCase();
   if(categories.indexOf(category)==-1)
    this.emit(':tell','That category doesnot exist. Ask Alexa to list all categories or send as an email if you want your desired category to be a feature ');
   let cardTitle="About the category "+category;
   let cardContent="";
   let speechOutput="";
   switch(category)
   {
       case 'emergency': cardContent="A priority household budget item is an emergency fund. An emergency fund is what you'll need in case of a catastrophic event -- you lose your job, become incapacitated or suffer an event that renders you unable to take care of yourself and your family. “Make it liquid, though. Don’t put your emergency savings in a hard-to-reach account,” says Corprew. Have an emergency fund that will cover your expenses for eight months -- this is significantly more\
                                        than previous advice that three months of living expenses is sufficient, thanks to changes in the economy. \n Source: quicken.com";
                         speechOutput+="A priority household budget item is an emergency fund. An emergency fund is what you'll need in case of a catastrophic event -- you lose your job, become incapacitated or suffer an event that renders you unable to take care of yourself and your family. “Make it liquid, though. Don’t put your emergency savings in a hard-to-reach account,” says Corprew. Have an emergency fund that will cover your expenses for eight months -- this is significantly more than previous advice that three months of living expenses is sufficient, thanks to changes in the economy.";                       
                         break;
       case 'housing':  cardContent="Keeping a roof over your head is another essential household budget item, which includes not just how much you pay for rent or for your mortgage. In the \"Housing\" category of household budget items, include household maintenance and repairs, renters or homeowners insurance and property taxes that you pay to your county or government jurisdiction. Corprew suggests allocating about 25 to 35 percent of your income for housing. He also says that if you already have your emergency money stashed and your debt and housing costs are under control, consider putting aside the difference for future short-term or long-term goals. \n Source: quicken.com";
                        speechOutput="Keeping a roof over your head is another essential household budget item, which includes not just how much you pay for rent or for your mortgage. In the \"Housing\" category of household budget items, include household maintenance and repairs, renters or homeowners insurance and property taxes that you pay to your county or government jurisdiction. Corprew suggests allocating about 25 to 35 percent of your income for housing. He also says that if you already have your emergency money stashed and your debt and housing costs are under control, consider putting aside the difference for future short-term or long-term goals.";
                        break;
       case 'savings': cardContent="\"Pay yourself\" is a common piece of budget advice, which means it's important to save for your present needs and, especially, your future needs. Financial experts like Corprew believe at least 10 percent of your earnings should go towards your savings. That includes saving for your emergency fund, participating in your employer's retirement savings plan and putting away money for your children's future. The benefit of putting some of your income into an employer-sponsored retirement savings account is that many companies match at least a percentage of your contribution, says Corprew. \n Source: quicken.com";
                       speechOutput="Pay yourself is a common piece of budget advice, which means it's important to save for your present needs and, especially, your future needs. Financial experts like Corprew believe at least 10 percent of your earnings should go towards your savings. That includes saving for your emergency fund, participating in your employer's retirement savings plan and putting away money for your children's future. The benefit of putting some of your income into an employer-sponsored retirement savings account is that many companies match at least a percentage of your contribution, says Corprew.";
                       break;
       case 'utilities': cardContent="Having water, electricity, and heating and cooling is vital to any household -- and it makes your life a lot easier and more pleasant -- so paying these expenses is a top priority. Your household budget category for utilities should include gas, electricity, water and sewage, land line and cell phone payments, cable television and Internet access. Up to 10 percent of your income should be a sufficient total for these services. \n Source: quicken.com";
                         speechOutput="Having water, electricity, and heating and cooling is vital to any household -- and it makes your life a lot easier and more pleasant -- so paying these expenses is a top priority. Your household budget category for utilities should include gas, electricity, water and sewage, land line and cell phone payments, cable television and Internet access. Up to 10 percent of your income should be a sufficient total for these services.";
                         break;
       case 'health care': cardContent="Staying healthy is essential. Depending on your circumstances and needs, you might need to spend more or less than others, but it's important to allocate money for expenses such as premiums for health, disability, vision and dental insurance. In addition, if your health care policy requires a co-pay each time you visit the doctor, include that in your household budget for health care. Prescription drugs, eyeglasses and contacts, and other health aids go in this category, too. Depending on your age and family circumstances, adding long-term care insurance to this budget category might be a wise choice. \n Source: quicken.com";
                          speechOutput="Staying healthy is essential. Depending on your circumstances and needs, you might need to spend more or less than others, but it's important to allocate money for expenses such as premiums for health, disability, vision and dental insurance. In addition, if your health care policy requires a co-pay each time you visit the doctor, include that in your household budget for health care. Prescription drugs, eyeglasses and contacts, and other health aids go in this category, too. Depending on your age and family circumstances, adding long-term care insurance to this budget category might be a wise choice.";
                          break;
       case 'debt': cardContent="Consumer debt is a catchall category that includes credit card bills, student loans, installment agreements and car payments. Ideally, according to Corprew, your total consumer debt is very low or nonexistent. But for many people, a certain amount of consumer debt is a reality. Corprew recommends limiting this kind of debt to 5 to 10 percent of your income.\n Source: quicken.com";
                    speechOutput="Consumer debt is a catchall category that includes credit card bills, student loans, installment agreements and car payments. Ideally, according to Corprew, your total consumer debt is very low or nonexistent. But for many people, a certain amount of consumer debt is a reality. Corprew recommends limiting this kind of debt to 5 to 10 percent of your income.";
                    break;
       case 'groceries': cardContent="Everybody eats, but how you spend your money -- whether it's dinner with friends, stocking up on groceries, picking up a latte on the way to work or ordering pizza delivery for the occasional Friday night in -- varies. How much to allocate to this category obviously depends on family size, eating habits and your ability to make wise purchases, but Corprew says approximately 10 to 15 percent is reasonable.";
                         speechOutput="Everybody eats, but how you spend your money whether it's dinner with friends, stocking up on groceries, picking up a latte on the way to work or ordering pizza delivery for the occasional Friday night in  varies. How much to allocate to this category obviously depends on family size, eating habits and your ability to make wise purchases, but Corprew says approximately 10 to 15 percent is reasonable.";
                        break;
       case 'personal care': cardContent="If you have a family to support, personal care costs could be quite expensive. Salons, hair care products, personal hygiene and laundry supplies, shoes and shoe repair, clothing and dry cleaning are among the myriad items that go into this category. Also, the baby shower gift for a friend or contributing a few dollars to a colleague's going-away party at work are personal expenses to put in this category, which might be around 15 percent of your household income. If you separate your clothing expenses, drop that amount to around 10 percent and allocate around 5 percent for expenses related only to clothing.";
                            speechOutput="If you have a family to support, personal care costs could be quite expensive. Salons, hair care products, personal hygiene and laundry supplies, shoes and shoe repair, clothing and dry cleaning are among the myriad items that go into this category. Also, the baby shower gift for a friend or contributing a few dollars to a colleague's going-away party at work are personal expenses to put in this category, which might be around 15 percent of your household income. If you separate your clothing expenses, drop that amount to around 10 percent and allocate around 5 percent for expenses related only to clothing.";
                            break;
       case 'entertainment': cardContent="After you've met all your obligations -- and pored over your personal finances and spending -- you probably want to have some fun with whatever is left. Many people allocate about 5 to 10 percent of their income to entertainment, whether that means spending a few dollars at a museum, putting aside money for the vacation you dream of taking, or treating your family to a \"stay-cation\" with a day at the local amusement park.";
                            speechOutput="After you've met all your obligations -- and pored over your personal finances and spending -- you probably want to have some fun with whatever is left. Many people allocate about 5 to 10 percent of their income to entertainment, whether that means spending a few dollars at a museum, putting aside money for the vacation you dream of taking, or treating your family to a stay-cation with a day at the local amusement park.";
                            break;
       case 'miscellaneous': cardContent="Any other expenses not belonging to any of the other categories";
                             speechOutput=cardContent;
                        
       
   }                     
   
   this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
   
 },
 
 'AddExpense':function(){
    var dollar=parseInt(this.event.request.intent.slots.dollar.value);
    var cents=parseInt(this.event.request.intent.slots.cents.value);
    if(isNaN(dollar)||isNaN(cents))
        this.emit(':tell','Please tell me valid numbers for your expenses and mention the currency in both dollar and cents');
    var category=this.event.request.intent.slots.category.value;
    console.log(Object.keys(this.attributes).length);
    if(!("presentDetails" in this.attributes))
        this.emit(':tell','The year and month have not been set yet. Please set those or ask for help for further help.');
    if(String(dollar)==='undefined'&&String(cents)==='undefined'&&String(category)==='undefined')
        this.emit(':tell','I am sorry, I didn\'t get that. Please repeat what you said again. Make sure you utter the value consisting of both dollar and cents. Utter 0 for the cents to indicate its absence.');
    if(String(Object.keys(this.attributes).length)==='0')
        this.emit(':tell',"You havenot set the year or month yet. Please set the year and month first. Ask for help for further help.");
    else{
        if(!("presentDetails" in this.attributes))
            this.emit(':tell','The year and month havenot been set yet. Please set those or ask for help for further help.');
        if(!("month" in this.attributes["presentDetails"]))
            this.emit(':tell',"You haven't set the month yet. Please set the month first. Ask for help for further help.");
        if(!("year" in this.attributes["presentDetails"]))
            this.emit(':tell',"You haven't set the year yet. Please set the month first. Ask for help for further help.");
    }
    
    
    console.log(Object.keys(this.attributes).length);
    
    if(!(Object.keys(this.attributes).length===0))
    {
        
    let cardContent="Emergency \n Housing \n Savings \n Utilities \n Healthcare \n Debt \n Groceries \n Personal Care \n Entertainment";
    if(categories.indexOf(category)===-1)
        this.emit(':tellWithCard','The category you mentioned is invalid. Valid categories are '+categories.join(','),'Valid categories',cardContent);
    let year=this.attributes["presentDetails"]["year"];
    let month=this.attributes["presentDetails"]["month"];
    let presentAmount=this.attributes[year][month][category];
    let store=(dollar*100)+cents+presentAmount;
    this.attributes["history"]=[category, this.attributes[year][month][category]];
    this.attributes[year][month][category]=store;
    this.emit(':saveState',true);
    let speechOutput=' Money under category '+category+' is now set to  $'+Math.floor(this.attributes[year][month][category]/100)+"."+(this.attributes[year][month][category]%100);
    cardContent=speechOutput;
    let cardTitle=speechOutput;
    this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
    }
    else
    {
      this.emit(':tell','Please set the year and month first. You can ask for help for further help');
    }
    
},

'SetThreshold': function()
{
   var dollar=parseInt(this.event.request.intent.slots.dollar.value);
   var cents=parseInt(this.event.request.intent.slots.cents.value);
    if(isNaN(dollar)||isNaN(cents))
        this.emit(':tell','Please tell me valid numbers for your threshold expenses and mention the currency in both dollar and cents');
   else
   if(!("presentDetails" in this.attributes)||Object.keys(this.attributes).length===0)
        this.emit(':tell','The year and month havenot been set yet. Please set those or ask for help for further help.');
  else{
  let expectation=(dollar*100)+cents;
  let year=this.attributes["presentDetails"]["year"];
  let month=this.attributes["presentDetails"]["month"];
  this.attributes[year][month]["threshold"]=expectation;
  let cardTitle="Threshold expense";
  let cardContent="Threshold expense set to $"+String(Math.floor(expectation/100))+"."+String(expectation%100);
  let speechOutput="Threshold expense set to $"+String(Math.floor(expectation/100))+"."+String(expectation%100);
  this.emit(':saveState',true);
  this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
  }
},

'ShowMonthReport': function()
{
    if(Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the year and month first.');
    else
    {
    if(!("presentDetails" in this.attributes)||!("month" in this.attributes["presentDetails"])||Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the month and year');
    else{
    let cardTitle="The Month In Review";
    let cardContent="";
    let speechOutput="You logged ";
    let year=parseInt(this.attributes["presentDetails"]["year"]);
    let month=this.attributes["presentDetails"]["month"];
    let total=0;
    for(let category of categories)
    {
        total+=this.attributes[year][month][category];
        cardContent+=category+": $"+String(Math.floor(this.attributes[year][month][category]/100))+"."+String(this.attributes[year][month][category]%100)+" \n";
        speechOutput+="$"+String(Math.floor(this.attributes[year][month][category]/100))+"."+String(this.attributes[year][month][category]%100)+" under category "+category+", ";
    }
    cardContent+="\n Total Expenses: $ "+String(Math.floor(total/100))+"."+String(total%100);
    speechOutput+="Total expenses logged is $"+String(Math.floor(total/100))+"."+String(total%100)+",";
    let th=this.attributes[year][month]["threshold"];
    let dif=th-total;
    if(this.attributes[year][month]["threshold"]===0)
        speechOutput+="You haven't set the threshold expense for the month yet.";
    else
    {
    if(dif>0)
    {
    cardContent+="You are $ "+Math.floor(dif/100)+"."+(dif%100)+" from breaching the threshold!";
    speechOutput+=" You are $"+Math.floor(dif/100)+"."+(dif%100)+" from breaching the threshold!";
    }
    else
    {
    dif=Math.abs(dif);
    cardContent+="You have breached your threshold by $ "+Math.floor(dif/100)+"."+(dif%100);
    speechOutput+="You have breached your threshold by $"+Math.floor(dif/100)+"."+(dif%100);
    }
    }    
    this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
    }
        
    }
},

'ShowParticularMonthReport': function(){
   if(Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the year and month first.');
    else
    {
    if(!("presentDetails" in this.attributes)||!("month" in this.attributes["presentDetails"])||Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the month and year');
    else{
    let cardTitle="The Month In Review";
    let cardContent="";
    let speechOutput="You logged ";
    let year=parseInt(this.event.request.intent.slots.year.value);
    let month=String(this.event.request.intent.slots.month.value);
    if(isNaN(year)||months.indexOf(month)===-1)
        this.emit(':tell','Mentioned year and month are invalid');
    if(!(year in this.attributes)||!(month in this.attributes[year]))
        this.emit(':tell','No records exist for the mentioned year and month.');
    else{
    let total=0;
    for(let category of categories)
    {
        total+=this.attributes[year][month][category];
        cardContent+=category+": $ "+String(Math.floor(this.attributes[year][month][category]/100))+"."+String(this.attributes[year][month][category]%100)+" \n";
        speechOutput+="$"+String(Math.floor(this.attributes[year][month][category]/100))+"."+String(this.attributes[year][month][category]%100)+" under category "+category+",";
        
    }
    cardContent+="\n Total Expenses: $ "+String(Math.floor(total/100))+"."+String(total%100);
    speechOutput+="Total expenses logged is $"+String(Math.floor(total/100))+"."+String(total%100)+" ,";
    let th=this.attributes[year][month]["threshold"];
    let dif=th-total;
    if(this.attributes[year][month]["threshold"]===0)
        speechOutput+="You haven't set the threshold expense for the month yet.";
    else
    {
    if(dif>0)
    {
    cardContent+="You are $ "+Math.floor(dif/100)+"."+(dif%100)+" from breaching the threshold!";
    speechOutput+="You are $"+Math.floor(dif/100)+"."+(dif%100)+" from breaching the threshold!";
    }
    else
    {
    dif=Math.abs(dif);
    cardContent+="You have breached your threshold by $ "+Math.floor(dif/100)+"."+(dif%100);
    speechOutput+="You have breached your threshold by $"+Math.floor(dif/100)+"."+(dif%100);
        
    }
    }    
    this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
    }
    }
    }
},

'CategoryStatsPresentMonth': function()
{
  if(Object.keys(this.attributes).length===0)
    this.emit(':tell','Please set the month and year first.');
  else
    if(!("presentDetails" in this.attributes)||!("month" in this.attributes["presentDetails"]))
        this.emit(':tell','Please set the month first');
  else{
      let category=String(this.event.request.intent.slots.category.value);
      if(categories.indexOf(category)===-1)
        this.emit(':tell','That category doesnt exist');
      else{
          let year=this.attributes["presentDetails"]["year"];
          let month=this.attributes["presentDetails"]["month"];
          let money=this.attributes[year][month][category];
          let cardTitle="Stats for the category "+category+" for the present month";
          let cardContent="You have logged $"+Math.floor(money/100)+"."+(money%100)+" towards the category "+category;
          let speechOutput=cardContent;
          this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
      }
  }
},

'CategoryStatsForParticularMonth': function(){
    if(Object.keys(this.attributes).length===0)
    this.emit(':tell','Please set the month and year first.');
  else
    if(!("presentDetails" in this.attributes)||!("month" in this.attributes["presentDetails"]))
        this.emit(':tell','Please set the month first');
  else{
      let category=String(this.event.request.intent.slots.category.value);
      let month=String(this.event.request.intent.slots.month.value);
      let year=parseInt(this.event.request.intent.slots.year.value);
      if(isNaN(year))
        this.emit(':tell','Please mention a valid year.');
      if(months.indexOf(month)===-1)
        this.emit(':tell','The mentioned month doesnot exist');
      if(!(year in this.attributes))
        this.emit(':tell','No records exist for the mentioned year');
      else
      if(!(month in this.attributes[year]))
        this.emit(':tell','No records exist for the indicated month in the mentioned year');
      else
      if(categories.indexOf(category)===-1)
        this.emit(':tell','That category doesnt exist');
      else{
          let money=this.attributes[year][month][category];
          let cardTitle="Stats for the category "+category+" for the  month "+month+", "+year;
          let cardContent="You have logged $"+Math.floor(money/100)+"."+(money%100)+" towards the category "+category;
          let speechOutput=cardContent;
          this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
      }
  }
    
},

'CategoryStatsPresentYear': function()
{
    if(Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the year and month first.');
    else
    {
    if(!("presentDetails" in this.attributes)||!("month" in this.attributes["presentDetails"])||Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the month and year first. Ask for help for further help.');
   else{
   let category=String(this.event.request.intent.slots.category.value);
   if(categories.indexOf(category)===-1)
    this.emit(':tell','That category doesnot exist. Ask Alexa to list all categories or send us an email if you want your desired category to be a feature in the future.');
   else{
   let cardTitle="Stats for the category "+category;
   let cardContent="";
   let speechOutput="";
   let year=this.attributes.presentDetails.year;
   let monthKeys=Object.keys(this.attributes[year]);
   let total=0;
   for(let i=0;i<monthKeys.length;i++)
   {
       let m=monthKeys[i];
       let r=parseInt(this.attributes[year][m][category]);
       total+=r;
   }
   let mean=Math.floor(total/(monthKeys.length));
   cardContent+="Total expenses logged this year: $"+String(Math.floor(total/100))+"."+String((total%100))+"\n";
   cardContent+="Mean of expenses logged this year: $"+String(Math.floor(mean/100))+"."+String(mean%100)+"\n";
   speechOutput+="Total expenses logged so far is $"+String(Math.floor(total/100))+"."+String(total%100);
   speechOutput+=" Mean expenses logged so far is $"+String(Math.floor(mean/100))+"."+String(mean%100);
   this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
   }
   }
   }
},

'CategoryStatsParticularYear': function()
{
    if(Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the year and month first.');
    else{
    if(!("presentDetails" in this.attributes)||!("month" in this.attributes["presentDetails"])||Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the month and year');
    else{
    let category=String(this.event.request.intent.slots.category.value);
    let year=parseInt(this.event.request.intent.slots.year.value);
    if(isNaN(year))
        this.emit(':tell','Please mention a valid year.');
    else
   if(categories.indexOf(category)===-1)
    this.emit(':tell','That category doesnot exist. Ask Alexa to list all categories or send us an email if you want your desired category to be a feature in the future.');
   else{
   let cardTitle="Stats for the category "+category;
   let cardContent="";
   let speechOutput="";
   
   let monthKeys=Object.keys(this.attributes[year]);
   let total=0;
   for(let i=0;i<monthKeys.length;i++)
   {
       let m=monthKeys[i];
       let r=parseInt(this.attributes[year][m][category]);
       total+=r;
   }
   let mean=Math.floor(total/(monthKeys.length));
   cardContent+="Total expenses logged this year: $ "+Math.floor(total/100)+"."+(total%100)+"\n";
   cardContent+="Mean of expenses logged this year: $"+Math.floor(mean/100)+"."+(mean%100)+"\n";
   speechOutput+="Total expenses logged for the year is  $"+Math.floor(total/100)+"."+(total%100);
   speechOutput+="Mean expenses logged for the year is  $"+Math.floor(mean/100)+"."+(mean%100);
   this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
   }
    
    }
    }
    
},

"Undo": function()
{
    if(Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the year and month first.');
    else{
    if(!("presentDetails" in this.attributes)||!("month" in this.attributes["presentDetails"])||Object.keys(this.attributes).length===0||!("history" in this.attributes))
        this.emit(':tell','Please set the month and year');
    else
    if(this.attributes["history"].length===0)
        this.emit(':tell','Your history is empty');
    else{
    let year=parseInt(this.attributes["presentDetails"]["year"]);
    let month=this.attributes["presentDetails"]["month"];
    let category=this.attributes["history"][0];
    let attr=this.attributes["history"][1];
    this.attributes[year][month][category]=attr;
    this.emit(':saveState',true);
    let speechOutput=category+" was reset to $"+Math.floor(attr/100)+"."+(attr%100);
    let cardContent=category+"was reset to $"+Math.floor(attr/100)+"."+(attr%100);
    let cardTitle="Undo";
    this.emit(':tell',speechOutput,cardTitle,cardContent);
    
    }
    }
        
},

"HowMuchToThreshold":function()
{
    if(Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the year and month first.');
    else{
    if(!("presentDetails" in this.attributes)||!("month" in this.attributes["presentDetails"])||Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the month and year');
    else{
    let year=parseInt(this.attributes["presentDetails"]["year"]);
    let month=this.attributes["presentDetails"]["month"];
    let threshold=this.attributes[year][month]["threshold"];
    let total=0;
    let speechOutput="";
    let cardContent="";
    let cardTitle="";
    for(let category of categories)
    {
       total+=this.attributes[year][month][category];
    }
    
    let diff=threshold-total;
    if(threshold===0)
    this.emit(':tell','You have not set the threshold for the present month');
    else
    {
    if(diff>0)
    {
        speechOutput="You are  $"+String(Math.floor(diff/100))+"."+String(diff%100)+"  from breaching the threshold ";
        cardContent=speechOutput;
        cardTitle="Threshold";
    }
    else
    {
        diff=Math.abs(diff);
        speechOutput="You have breached the threshold by $"+String(Math.floor(diff/100))+"."+String(diff%100);
        cardContent=speechOutput;
        cardTitle="Threshold";
    }
    
    }
    
    this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
    
    }
    }
},

"SuccessFactor": function()
{
    if(Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the year and month first.');
    else{
    if(!("presentDetails" in this.attributes)||!("month" in this.attributes["presentDetails"])||Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the month and year');
    else{
    let year=parseInt(this.attributes["presentDetails"]["year"]);
    let mon=Object.keys(this.attributes[year]);
    let success=0;
    let speechOutput="";
    let cardTitle="";
    let cardContent="";
    for(let month of mon)
    {
    let threshold=this.attributes[year][month]["threshold"];
    let total=0;
    for(let category of categories)
    {
        total+=this.attributes[year][month][category];
        
    }
    
    let tht=this.attributes[year][month]["threshold"];
    if(tht===0)
    continue;
    if(tht>=total)
        success+=1;
    }
    cardTitle="Success Factor for the present year is "+String(success)+"/"+String(mon.length);
    speechOutput="You were successful "+success+" times out of "+mon.length+" in keeping your expenses below threshold ";
    cardContent=speechOutput;
    
    this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
    }
    }
        
},

'OverallPresentYearReport': function(){
    if(Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the year and month first.');
    else{
    if(!("presentDetails" in this.attributes)||!("month" in this.attributes["presentDetails"])||Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the month and year first.');
    else{
    let year=parseInt(this.attributes["presentDetails"]["year"]);
    let mon=Object.keys(this.attributes[year]);
    let speechOutput="You have logged ";
    let cardTitle="Category Wise Yearly Report (Present Year)";
    let cardContent="";
    for(let cat of categories)
    {
        let total=0;
        for(let month of mon)
        {
           total+=this.attributes[year][month][cat];
        }
        let mean=Math.floor(total/mon.length);
        cardContent+=cat+": Total: $"+String(Math.floor(total/100))+"."+String(total%100)+" Mean: $"+String(Math.floor(mean/100))+"."+String(Math.floor(mean%100))+"\n";
        speechOutput+="$"+String(Math.floor(total/100))+"."+String(total%100)+" towards the category "+cat+" with a mean of $"+String(Math.floor(mean/100))+"."+String(Math.floor(mean%100))+", ";
        
    }
    
    this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
    
    }
    }
        
},

"ParticularYearReport":function(){
let year=parseInt(this.event.request.intent.slots.year.value);
if(Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the year and month first.');
    else{
    if(!("presentDetails" in this.attributes)||!("month" in this.attributes["presentDetails"])||Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the month and year first.');
    else{
    
    if(isNaN(year))
    this.emit(':tell','Please mention a valid year.');
    else
    if(!(year in this.attributes))
    this.emit(':tell','You havent logged expenses for that year.');
    else{
    let mon=Object.keys(this.attributes[year]);
    let speechOutput="You have logged ";
    let cardTitle="Category Wise Yearly Report for "+year;
    let cardContent="";
    for(let cat of categories)
    {
        let total=0;
        for(let month of mon)
        {
           total+=this.attributes[year][month][cat];
        }
        let mean=Math.floor(total/mon.length);
        cardContent+=cat+": Total: $"+String(Math.floor(total/100))+"."+String(total%100)+" Mean: $"+String(Math.floor(mean/100))+"."+String(Math.floor(mean%100))+"\n";
        speechOutput+="$"+String(Math.floor(total/100))+"."+String(total%100)+" towards the category "+cat+" with a mean of $"+String(Math.floor(mean/100))+"."+String(Math.floor(mean%100))+", ";
        
    }
    
    this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
    
    }
    }
    }
},

'MonthToMonthComparison':function()
{
    if(Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the year and month first.');
    else{
    if(!("presentDetails" in this.attributes)||!("month" in this.attributes["presentDetails"])||Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the month and year');
    else{
    let month1=String(this.event.request.intent.slots.monthone.value);
    let year1=parseInt(this.event.request.intent.slots.yearone.value);
    let month2=String(this.event.request.intent.slots.monthtwo.value);
    let year2=parseInt(this.event.request.intent.slots.yeartwo.value);
    let cardContent="";
    let speechOutput="";
    let cardTitle="Month on Month comparison";
    if(!(year1 in this.attributes)||!(year2 in this.attributes)||!(month1 in this.attributes[year1])||!(month2 in this.attributes[year2]))
        this.emit(':tell','No records exist for indicated periods');
    else{
    for(let cat of categories)
    {
        let change=0;
        let amt1=this.attributes[year1][month1][cat];
        let amt2=this.attributes[year2][month2][cat];
        cardContent+="Stats for "+ cat+"\n";
        cardContent+=month1+","+year1+": "+Math.floor(amt1/100)+"."+(amt1%100)+"\n";
        cardContent+=month2+","+year2+": "+Math.floor(amt2/100)+"."+(amt1%100)+"\n";
        if(amt1!==0)
        change=((amt2-amt1)/(amt1))*100;
        cardContent+="Percentage change: "+change+"%\n";
    }
    this.emit(':tellWithCard','The report has been sent to a card in the app','Month on Month comparsion',cardContent);
    }
    }
    }

        
},

'OrderByExpenditure': function(){
    if(Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the year and month first.');
    else{
    if(!("presentDetails" in this.attributes))
        this.emit(':tell','Please set the year and month first.');
    else{
    const sortable=[];
    let year=this.attributes["presentDetails"]["year"];
    let month=this.attributes["presentDetails"]["month"];
    for(let ele in this.attributes[year][month])
        sortable.push([ele,this.attributes[year][month][ele]]);
    sortable.sort(function(a,b){
        return b[1]-a[1];
    });
    
    let cardContent="";
    let cardTitle="Ordered in descending order of expenditure";
    let speechOutput="You have logged ";
    for(let ele of sortable)
    {
        cardContent+=ele[0]+" $"+String(Math.floor(ele[1]/100))+"."+String(ele[1]%100)+"\n";
        speechOutput+="$"+String(Math.floor(ele[1]/100))+"."+String(ele[1]%100)+" towards the category "+ele[0]+", ";
    }
    
    this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
    }
}

},

"UpdateExpense":function(){
    let category=String(this.event.request.intent.slots.category.value);
    let month=String(this.event.request.intent.slots.month.value);
    let year=parseInt(this.event.request.intent.slots.year.value);
    let dollar=parseInt(this.event.request.intent.slots.dollar.value);
    let cents=parseInt(this.event.request.intent.slots.cents.value);
    if(isNaN(dollar)||isNaN(cents))
        this.emit(':tell','Please indicate a valid number for the dollar and cents field and mention the amount in both dollar and cents');
    else
    if(isNaN(year))
        this.emit(':tell','Please mention a valid year');
    else
    if(Object.keys(this.attributes).length===0)
        this.emit(':tell','Please set the month and year first');
    else
    if(categories.indexOf(category)===-1)
        this.emit(':tell','Please mention a valid category');
    else
    if(months.indexOf(month)===-1)
        this.emit(':tell','Please mention a valid month.')
    else
    if(!(year in this.attributes))
        this.emit(':tell','No expenses were logged for that year');
    else
    if(!(month in this.attributes[year]))
        this.emit(':tell','No expenses logged for that month.');
    else
    {
        let money=dollar*100+cents;
        this.attributes[year][month][category]=money;
        this.emit(':saveState',true);
        let cardTitle="Category "+category+" was set to $"+Math.floor(money/100)+"."+(money%100)+" for the month "+month+","+year;
        let speechOutput=cardTitle;
        let cardContent=cardTitle;
        this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
    }
},

"ListAllRecords":function(){
    let y=Object.keys(this.attributes);
    if(y.length===0)
    this.emit(':tell','You havent started logging your expenses yet.');
    else
    {
        let cardTitle="All available records (by year and corresponding months)";
        let cardContent="";
        let speechOutput="Available records sent to a card in the app.";
        for(let item of y)
        {
            if(isNaN(item))
                continue;
            cardContent+=item+"\n";
            let mons=Object.keys(this.attributes[item]);
            for(let mon of mons)
            {   
                if(months.indexOf(mon)!==-1)
                    cardContent+=mon+", ";
                
            }
        }
        this.emit(':tellWithCard',speechOutput,cardTitle,cardContent);
    }
}

};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.dynamoDBTableName = 'EMStoreUS';
    alexa.registerHandlers(handlers);
    alexa.execute();
};
