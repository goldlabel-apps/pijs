Write a new python script to take the picture

It should save the image as current-photo but also as a file with unixepoch as its name

Then it should cleanup any files older than a specified amount to stop the Pi overflowing

The new Pi info endpoint will give the folder size form the camera so that it can be shown in the app

Each image is 800x450px and around 350kb === 0.35MB
how much space do we have? call it 20 GB === 20000MB
number of photos which will fit = 57000

at 5 sec intervals
1 min = 12 photos
1 hour = 720 photos
24 hours = 17280 photos = 6048 MB = 6GB / Day