Background and Overview

The world is currently being affected by a pandemic which is something I have not seen in my lifetime.  The Covid Connection is an app created to help those impacted by covid-19 stay informed, connected and offer support.  Users can view a covid help page the educates them on how to deal with handling the overall stress the pandemic places on everyday life.  Users can also review tips on how to stay safe and prevent the spread.   Also, users are informed of the signs and symptoms to look out for if you were to come in contact with someone who was infected and what to do in that case.

The most exciting and innovative feature of the covid connection is the ability of users to request and fulfill favors for each other.   The favor request are generally for those who may be on quarantine or high risk but anyone who is in need of a helping can simply make a request and anyone willing to help can fulfill that request.  

Technologies

Mongoose (5.10.19)
Express (4.17.1)
React (17.0.1)
Node (10.13.0)


User Authentication

Users are reqired to create an account to fully access The Covid Connection(CC). There is a demo button on the sign-up page which creates a quick account name and password to allow a user to fully access the site. If you would like to create your own username and password then to complete sign up a user must create a username and enter their email address and create a password. A user must create a password of at least 6 characters and passwords are not stored in the database.

Using Bcrypt hashing algorithm CC securely stores only a password digest. By doing this CC safely authenticates a new user without allowing their password, which may be used on a number of other accounts to ever be exposed. The password digest is what will be used to verify the authenticity of a user during subsequent login sessions.


![image](https://user-images.githubusercontent.com/67871528/111408930-66ac5900-86ac-11eb-928d-0086212ace13.png)
![image](https://user-images.githubusercontent.com/67871528/111408976-75930b80-86ac-11eb-9028-69741ba1c3c6.png)


If a user creates an account manually or simply clicks the demo button to create a temporary account they will then have the option to view that users profile page displayed by the profile icon.

![image](https://user-images.githubusercontent.com/67871528/111409165-cefb3a80-86ac-11eb-9194-ec607101c922.png)


A users profile page has menu options to show the user's account info and also to request a favor.  The profile page also lists any favors a user has accepted and chose to fulfill for others.

![image](https://user-images.githubusercontent.com/67871528/111409343-27323c80-86ad-11eb-860e-b496feccaef6.png)

Requesting a Favor


If a user wants to view favors other users are currently requesting or fulfilling they have a couple of options.  You can go to the newsfeed and see a list of all favors being requested or accepted or you can click on a users username and see a list of all the favors they have requested or fulfilled.

![image](https://user-images.githubusercontent.com/67871528/111409701-da029a80-86ad-11eb-88dc-06858c7f605b.png)
![image](https://user-images.githubusercontent.com/67871528/111409719-e2f36c00-86ad-11eb-9fec-70b662b0f08b.png)


If a user wants to learn more about covid, deal with the stress of covid related issues or learn how to stop the spread then visiting the covid help page will be extremely helpful.   The covid help page has several slide shows informing CC users on how to handle covid related issues


![image](https://user-images.githubusercontent.com/67871528/111410030-5dbc8700-86ae-11eb-94f4-c6317427c601.png)

![image](https://user-images.githubusercontent.com/67871528/111410054-690fb280-86ae-11eb-8c17-2f690d568cc0.png)

![image](https://user-images.githubusercontent.com/67871528/111410077-7331b100-86ae-11eb-8237-ab2d5a6f6101.png)



