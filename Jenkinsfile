pipeline {
    agent any 
    stages {
        stage("verifying tooling") {
            steps {
                sh '''
                docker version
                docker info
                docker-compose version
                curl --version
                '''
            }
        }

//         stage("prune docker data") {
//             steps {
//                 sh 'docker system prune -a --volumes -f'
//             }
//         }

//         stage("start container") {
//             steps {
//                 sh 'docker compose up'
//             }
//         }

//         stage("verify docker compose") {
            
//             steps {
//                 sh 'docker-compose ps'
//             }
//         }

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
