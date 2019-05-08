class Numbers:
    def __init__(self, list):
        self.list = list
        
    def listsum(self):
        print(sum(self.list))
            
    def listproducts(self):
        result = 1
        for x in self.list :
            result = result * x
            print(result)
    
    def lowest(self):
        print(min(self.list))
        
    def highest(self):
        print(max(self.list))
            
number = Numbers([2,4,58,41,30,102,59,63])
number.listsum()
number.listproducts()
number.lowest()
number.highest()         