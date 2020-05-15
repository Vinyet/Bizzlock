This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# BIZZLOCK

![Bizzlock logo](https://imgur.com/GwG1C2l.png)

Bizzlock is a web app project where users can give feedback and read feedback on how companies treat their employees. In order to encourage users to give their feedback, the users's identity remains anonymous.

Information regarding companies include: 

1. Objective information: Industry, Location, Description, Image, Website, Job perks.

2. Subjective information: Salary rating, Work/life balance rating, Overall rating, Comments.

[Go to Bizzlock](https://bizzlock-b46dc.firebaseapp.com/)


## Technologies 

|  Languages  |  Server-side  |  Testing  |         API            |
| ---|---|--- |---|---|---    |                       
|    HTML5    |   Firebase    |   Jest    | Google Knowledge Graph |   
|    CSS3     |               |  Cypres
|    Sass     |
| Javascript  |
|   React.js  |


## How it works

* EMPLOYEE: After choosing the option to give feedback, the user is taken to a signup page where Firebase registers them and assigns them an UID. The user enters a company name. There are two scenarios: 

  - If the company is already registered, the user is taken to the UpdateCompany page. 
  * If the company is not registered, there are two options:
      + The company is on the Google API, which returns company data
      + The company is not no the Google API, so the user has to provide the data
* JOBSEEKER: This user can only read the data posted by other users. They can search for a specific company, use the filters in the sidebar, or sort by different criteria. They can click on a company to read the details on it.

![Basic app diagram](https://imgur.com/RMLXnoU.png)

## Images

![Home](https://imgur.com/21eHLTr.png)
![CreateCompany](https://imgur.com/CjuNitQ.png)
![CompanyListing](https://imgur.com/HCu6rM5.png)
![CompanyDetail](https://imgur.com/TOQrggW.png)

## Future additions

- Additional rating criteria
- Blockchain with [Blockstack](https://docs.blockstack.org/)