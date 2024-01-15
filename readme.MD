# Overview

This GitHub repository hosts an AI-driven system designed to enhance individual health management and facilitate remote patient monitoring for healthcare providers. The system leverages artificial intelligence to provide personalized health recommendations based on an individual's medical history, genetics, and lifestyle. Additionally, it allows healthcare providers to remotely monitor patients' vital signs and health metrics in real-time, enabling early intervention and reducing hospital readmissions.


# Purpose

The primary purpose of this project is to empower individuals to make informed decisions about their health and well-being. By analyzing medical checkup reports, predicting diseases based on symptoms, and offering personalized exercise and dietary plans, the system aims to enhance health awareness and promote proactive health management. For healthcare providers, the system facilitates efficient remote patient monitoring, contributing to timely interventions and improved patient outcomes.


# Features

## Disease Prediction using Medical Checkup Reports:

1. Users can input medical checkup reports, and the system retrieves information and displays potential diseases.
1. Personalized exercise plans and dietary suggestions are provided based on the report to maintain health parameters.

## Symptom-Based Disease Prediction:

1. Users can select symptoms they are experiencing, and the machine learning algorithm predicts possible diseases.
1. This in turn helps in seeking medical help due to early detection and enable targeted medical tests thereby reducing the number of tests needed to be conducted.

## Health Vitals Tracking:

1. The system maintains a record of users' health vitals collected from external wearable devices.
1. Real-time display of vital signs and health metrics on the user portal for easy monitoring.

## User Portal:

1. Users have access to a secure and personalized portal where they can input medical data, view disease predictions, and track health vitals.
1. Historical data and trends are presented for better long-term health management.

## Remote Patient Monitoring for Healthcare Providers:

1. Healthcare providers can remotely monitor patients' vital signs and health metrics in real-time.
1. Early intervention is facilitated, leading to reduced hospital readmissions and improved patient care.



# Functionalities

## AI-Driven Disease Prediction:

1. Utilizes machine learning algorithms to predict diseases based on medical checkup reports and symptoms.

## Personalized Recommendations:

1. Offers personalized exercise plans and dietary suggestions tailored to individual health profiles.

## Health Vitals Integration:

1. Integrates with external wearable devices to collect and display users' health vitals.


## User-Friendly Portal:

1. Provides a user-friendly portal for individuals to input data, view disease predictions, and track health trends.

## Secure Healthcare Provider Access:

1. Enables healthcare providers to securely access real-time patient data for remote monitoring and intervention.



# Information Retreival from medical report

Regular Expressions are employed to extract various parameters from a PDF medical report file. The extracted parameter values are then compared against predefined ranges, and any values exceeding these ranges are identified. This analysis is utilized to predict potential diseases the user may be experiencing. Additionally, a personalized exercise plan is generated to enhance health, and a list of beneficial food items is compiled to help regulate the identified parameters.

In the prototype, a dummy dataset is utilized for exercises, food items, and their correlation with specific health conditions due to the unavailability of a public dataset.


# Disease Prediction from Symptoms list

SVM multi-class classifier is used to give the possible disease the user may be facing according to the symptoms chosen. 

### dataset used
https://www.kaggle.com/code/emreustundag/disease-prediction-from-symptoms


# Vital feed from external smart wearable

A dummy dataset is being used for the sake of the prototype since hardware implementation could not be simulated. For the actual application, live data will be fed to the application via the wearable at specific time intervals and any abnormalities would be reported to the emergency medical services.

For future scopes, these vitals' analysis over a long period of time can be useful in estimating the overall health of the body and predicting possible health issues, but this application is cuurently of the project's scope due to un-availibilty of hardware simiulation.


# Installation Instructions

No installation needed, everything is deployed :

Python APIs : Deployed on AWS-EC2

NodeJS APIs : Deployed on Render

ReactJS Frontend : Deployed on Vercel

# Prerequisites

Sample Medical Report for Input :
https://drive.google.com/file/d/1zSJ0vIoMgWs68raDNW2GId7UAp24slwo/view

Symptoms : Symptoms are to be manually selected in the symptoms section.

# Usage Guidelines

Steps :

1. Make an account on the website URL.
2. Upload symptoms in symptoms section to get predicted disease.
3. Upload pdf medical report for food and exercise suggestions.
4. Review Vitals remotely by connecting sart devices such as apple iwatch (Currently the data in vitals is dummy for visualisation purposes).

# External Requirements

No external requirements