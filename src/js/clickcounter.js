class ClickCounter{

    constructor(){
        this.clickCount = 0;
        this.clickCompanionCount = 0;
        this.clickCompanionCost = 100;
        this.compounderCount = 0;
        this.compounderCost = 10;
    }

    getClickCount(){
        return this.clickCount;
    }

    clickIncrementor(){
        this.clickCount++;
    }

    getClickCompanionCount(){
        return this.clickCompanionCount;
    }

    // getClickCompanionCost(){
    //     return this.clickCompanionCost;
    // }
    
    purchaseEachClickCompanion(){
        this.clickCompanionCost = this.clickCompanionCost + (this.clickCompanionCost*.1);  
    }

    purchaseCompanionCondition(){
        if (this.clickCount >= this.clickCompanionCost)
        {
            this.purchaseClickCompanion()
        }
    }

    purchaseClickCompanion(){
        this.clickCompanionCount++;
        this.clickCount -= this.clickCompanionCost;
        this.purchaseEachClickCompanion();
    }

    getCompounderCount(){
        return this.compounderCount;
    }

    purchaseEachCompounder(){
        this.compounderCost = this.compounderCost + (this.compounderCost * .1);  
    }

    purchaseCompounderCondition(){
        if (this.clickCount >= this.compounderCost)
        {
            this.purchaseCompounders()
        }
    }

    compounderClickValue(){
        this.clickCount *= 1.2;
    }

    purchaseCompounder(){
        this.compounderCount++;
        this.clickCount -= this.compounderCost;
        this.purchaseEachCompounder();
        this.compounderClickValue();
    }


}