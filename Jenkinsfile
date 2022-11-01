pipeline {
    agent any 
    stages {
        stage("build") {
            steps {
                echo 'building the backend docker container'
                sh "docker compose up -d"
            }
        }

        stage("test") {
            steps {
                echo 'testing the frontend docker container'
            }
        }

        stage("deploy") {
            echo 'deploying the application using docker compose'
        }

        post {

            always {
                mail to: bishalroy895@gmail, subject: 'The pipeline was executed!'
            }

            success {
                mail to: bishalroy895@gmail.com, subject: 'The Pipeline failed :('
            }
            
            failure {
                mail to: bishalroy895@gmail.com, subject: 'The Pipeline failed :('
            }
        }
    }
}