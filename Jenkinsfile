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

        stage("prune docker data") {
            steps {
                sh 'docker-compose down'
                sh 'docker system prune -a --volumes -f'
            }
        }

        stage("start container") {
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage("verify docker compose") {
            
            steps {
                sh 'docker-compose ps'
            }
        }

    }

        post {

            always {
                echo 'Pipeline executed!'
            }

            success {
                echo 'Success!'
            }
            
            failure {
                echo 'Failed!'
            }
        }
}
