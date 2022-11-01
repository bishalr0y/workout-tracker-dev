pipeline {
    agent any 
    stages {
        stage("build") {
            steps {
                echo "building the backend docker container"
                sh "docker-compose up"
            }
        }

        stage("test") {
            steps {
                echo "testing the app"
            }
        }

        stage("deploy") {
            steps {
                echo "deploying the app"
            }
        }

    }

        post {

            always {
                //mail to: bishalroy895@gmail, subject: 'The pipeline was executed!'
                echo 'Pipeline executed!'
            }

            success {
                //mail to: bishalroy895@gmail.com, subject: 'The Pipeline failed :('
                echo 'Success!'
            }
            
            failure {
                //mail to: bishalroy895@gmail.com, subject: 'The Pipeline failed :('
                echo 'Failed!'
            }
        }
}
