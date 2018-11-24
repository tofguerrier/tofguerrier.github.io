Title: A simple way to draw for Christmas Kindle
Date: 2017-07-19
Tags: R, Python
Category: Python
Summary: A christmas kindle way to draw with R or Python

A much simpler Christmas kindle draw by simple permutation (sample).

**_Idea : Keep it simple_**

# R Code

Using R this gives the following

```R
simple_secret_santa <-function(names){
   n = length(names)
   s <- sample(names, n, replace = FALSE)
   final <- cbind(s,rep('give to',n),c(s[2:n],s[1]))
   final
}
```
It guarantees that nobody gives to himself, and it also prevent circular gifting - ie A give to B and B give to A (except if there is only 2 persons).

And we can use it simply like this:

```R
names <- c('Robert','Anna','Louis','Joseph','Mary','Antoine','Alex')
simple_secret_santa(names=names)
```

| Person  | 'give to' | Person |
| -------- | --------- | ------ |
| 'Robert' | 'give to' | 'Louis' |
| 'Louis' | 'give to' | 'Joseph' |
| 'Joseph' | 'give to' | 'Anna' |
| 'Anna' | 'give to' | 'Antoine' |
| 'Antoine' | 'give to' | 'Mary' |
| 'Mary' | 'give to' | 'Robert' |

# Python code
The same code in python gives

```python
import random

def simple_secret_santa(names):
  n = len(names)
  s = random.sample(names,k=n)
  for i,name in enumerate(s):
    if i == len(s)-1:
      to = s[0]
    else:
      to = s[i+1]
    print str(i+1) + "   "+name + ' gives to ' + to
```

```python
names = ('Robert','Anna','Louis','Joseph','Mary','Antoine','Alex')
simple_secret_santa(names)
```
Which gives us:

|1|Alex|gives to|Anna|
|2|Anna|gives to|Mary|
|3|Mary|gives to|Robert|
|4|Robert|gives to|Antoine|
|5|Antoine|gives to|Louis|
|6|Louis|gives to|Joseph|
|7|Joseph|gives to|Alex|


# References

* [SECRET SANTA PICKER USING R](https://thepracticalr.wordpress.com/2016/12/07/secret-santa-picker-2-using-r/)

* [SECRET SANTA PICKER USING R 2](https://thepracticalr.wordpress.com/2015/12/12/secret-santa-picker-using-r/)
