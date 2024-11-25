import cloneDeep from 'lodash.clonedeep';
import { CreationOfAmazonECR, CreationOfArgoCD, CreationOfAWS, CreationOfAzure, CreationOfBitbucket, CreationOfCircleCI, CreationOfDockerHub, CreationOfGCP, CreationOfGilab, CreationOfGithub, CreationOfGithubContainerRegistry, CreationOfGoogleContainerRegistry, CreationOfGrafana, CreationOfJenkins, CreationOfLoki, CreationOfMimir, CreationOfTempo } from '../types/devopsgpt.type';

const defaultDevopsAWSValues: CreationOfAWS = {
    title: 'DevOps_GPT',
    aws: 'AWS',
    awssecretname: 'Secret1',
    awsaccesskeyId: 'Key1',
    awssecretaccessKey: 'SecretAccess1',
    awsregion: 'Region1',
    editawssecretaccessKey: 'SecretAcce',
    editawsregion: 'Regio'
}

const createAWS = (overwrites: Partial<CreationOfAWS> = {}) => {
    return cloneDeep({
        ...defaultDevopsAWSValues,
        ...overwrites
    });
};

const defaultDevopsGCPValues: CreationOfGCP = {
    gcp: 'GCP',
    gcpsecretname: 'Secret2',
    gcpprojectId: 'ProjectId1',
    gcpserviceaccountKey: 'ServiceAccount1',
    editgcpserviceaccountKey: 'ServiceAcco',
}

const createGCP = (overwrites: Partial<CreationOfGCP> = {}) => {
    return cloneDeep({
        ...defaultDevopsGCPValues,
        ...overwrites
    })
}

const defaultDevopsAzureValues: CreationOfAzure = {
    azure: 'Azure',
    azuresecretname: 'Secret3',
    azuretenantId: 'Tenant1',
    azureclientId: 'ClientId1',
    azureclientSecret: 'ClientSecret1',
    editazureclientId: 'ClietId1',
    editazureclientSecret: 'ClintSeret1',
}

const createAzure = (overwrites: Partial<CreationOfAzure> = {}) => {
    return cloneDeep({
        ...defaultDevopsAzureValues,
        ...overwrites
    })
}

const defaultDevopsGithubValues: CreationOfGithub = {
    github: 'GitHub',
    githubsecretname: 'Secret1',
    githubusername: 'username1',
    githubaccessToken: 'acctoken1',
    editgithubaccessToken: 'accken1'
}

const createGithub = (overwrites: Partial<CreationOfGithub> = {}) => {
    return cloneDeep({
        ...defaultDevopsGithubValues,
        ...overwrites
    })
}

const defaultDevopsGitlabValues: CreationOfGilab = {
    gitlab: 'GitLab',
    gitlabsecretname: 'Secret4', 
    gitlabusername: 'UserName2',
    gitlabaccessToken: 'AccessToken2',
    editgitlabaccessToken: 'AcessToen2'
}

const createGitlab = (overwrites: Partial<CreationOfGilab> = {}) => {
    return cloneDeep({
        ...defaultDevopsGitlabValues,
        ...overwrites
    })
}

const defaultDevopsBitbucketValues: CreationOfBitbucket = {
    bitbucket:  'Bitbucket',
    bbsecretname: 'Secret5',
    bbusername: 'UserName3',
    bbaccessToken: 'AccessToken3',
    editbbaccessToken: 'AccsToen3',
}

const createBitbucket = (overwrites: Partial<CreationOfBitbucket> = {}) => {
    return cloneDeep({
        ...defaultDevopsBitbucketValues,
        ...overwrites
    })
}

const defaultDevopsGoogleContainerRegistryValues: CreationOfGoogleContainerRegistry = {
    googlecontainerregistry: 'Google Container Registry',
    gcrsecretname: 'Secret7',
    gcrserviceaccountkey: 'ServiceAccountKey1',
    gcrurl: 'https://google.com',
    editgcrurl: 'https://gmail.com'
}

const createGoogleContainerRegistry = (overwrites: Partial<CreationOfGoogleContainerRegistry> = {}) => {
    return cloneDeep({
        ...defaultDevopsGoogleContainerRegistryValues,
        ...overwrites
    })
}

const defaultDevopsAmazonECRValues: CreationOfAmazonECR = {
    amazonecr: 'Amazon ECR',
    amazonecrsecretname: 'Secr3',
    amazonecrregistryId: 'RegistryId1',
    amazonecraccesskeyId: 'AccessKeyId1',
    amazonecrsecretaccesskey: 'SecretAccessKey1',
    editamazonecrsecretaccesskey: 'SeetAessKey1'
}

const createAmzonECR = (overwrites: Partial<CreationOfAmazonECR> = {}) => {
    return cloneDeep({
        ...defaultDevopsAmazonECRValues,
        ...overwrites
    })
}

const defaultDevopsDockerHubValues: CreationOfDockerHub = {
    dockerhub: 'Docker Hub',
    dockerhubsecretname: 'Secret9',
    dockerhuburl: 'https://google.com',
    dockerhubusername: 'Username1',
    dockerhubpassword: 'Password1',
    editdockerhubusername: 'Useme1',
    editdockerhubpassword: 'Paswrd1'
}

const createDockerHub = (overwrites: Partial<CreationOfDockerHub> = {}) => {
    return cloneDeep({
        ...defaultDevopsDockerHubValues,
        ...overwrites
    })
}

const defaultDevopsGithubContainerRegistryValues: CreationOfGithubContainerRegistry = {
    ghcr: 'GitHub Container Registry',
    ghcrsecretname: 'Secret17',
    ghcrregistryurl: 'https://google.com',
    ghcrusername: 'Username4',
    ghcrpassword: 'Password6',
    editghcrusername: 'Usrnme4',
    editghcrpassword: 'Pswrd6'
}

const createGithubContainerRegistry = (overwrites: Partial<CreationOfGithubContainerRegistry> = {}) => {
    return cloneDeep({
        ...defaultDevopsGithubContainerRegistryValues,
        ...overwrites
    })
}

const defaultDevopsArgoCDValues: CreationOfArgoCD = {
    argocd: 'ArgoCD',
    acdsecretname: 'Seet10',
    acdendpointurl: 'https://www.google.com',
    acdusername: 'Username4',
    acdpassword: 'Password3',
    editacdusername: 'Usenae4',
    editacdpassword: 'Paswrd3',
}

const createArgoCD = (overwrites: Partial<CreationOfArgoCD> = {}) => {
    return cloneDeep({
        ...defaultDevopsArgoCDValues,
        ...overwrites
    })
}

const defaultDevopsJenkinsValues: CreationOfJenkins = {
    jenkins: 'Jenkins',
    jsecretname: 'Secret11',
    jendpointurl: 'https://www.google.com',
    jusername: 'Username5',
    jpassword: 'Password5',
    editjusername: 'Usrnae5',
    editjpassword: 'Paswod5'
}

const createJenkins = (overwrites: Partial<CreationOfJenkins> = {}) => {
    return cloneDeep({
        ...defaultDevopsJenkinsValues,
        ...overwrites
    })
}

const defaultDevopsCircleCIValues: CreationOfCircleCI = {
    circleci: 'CircleCI',
    ccisecretname: 'Secret12',
    cciendpointurl: 'https://www.google.com',
    cciusername: 'Username6',
    ccipassword: 'Password6',
    editcciusername:  'Usenae6',
    editccipassword: 'Paswod6'
}

const createCircleCI = (overwrites: Partial<CreationOfCircleCI> = {}) => {
    return cloneDeep({
        ...defaultDevopsCircleCIValues,
        ...overwrites
    })
}

const defaultDevopsGrafanaValues: CreationOfGrafana = {
    grafana: 'Grafana',
    gsecretname: 'Secret13',
    gendpointurl: 'https://www.google.com',
    gusername: 'Username7',
    gpassword: 'Password7',
    editgusername: 'Uernae7',
    editgpassword: 'Psswod7',
}

const createGrafana = (overwrites: Partial<CreationOfGrafana> = {}) => {
    return cloneDeep({
        ...defaultDevopsGrafanaValues,
        ...overwrites
    })
}

const defaultDevopsLokiValues: CreationOfLoki = {
    loki: 'Loki',
    lsecretname: 'Secret14',
    lendpointurl: 'https://www.google.com',
    lusername: 'Username8',
    lpassword: 'Password7',
    editlusername: 'Usname8',
    editlpassword: 'Psword7',
}

const createLoki = (overwrites: Partial<CreationOfLoki> = {}) => {
    return cloneDeep({
        ...defaultDevopsLokiValues,
        ...overwrites
    })
}

const defaultDevopsMimirValues: CreationOfMimir = {
    mimir: 'Mimir',
    msecretname: 'Secret15',
    mendpointurl: 'https://www.google.com',
    musername: 'Username9',
    mpassword: 'Password8',
    editmusername: 'Useame9',
    editmpassword: 'Paword8',
}

const createMimir = (overwrites: Partial<CreationOfMimir> = {}) => {
    return cloneDeep({
        ...defaultDevopsMimirValues,
        ...overwrites
    })
}

const defaultDevopsTempoValues: CreationOfTempo = {
    tempo: 'Tempo',
    tsecretname: 'Secet22',
    tendpointurl: 'https://www.google.com',
    tusername: 'Username10',
    tpassword: 'Password7',
    edittusername: 'Userne10',
    edittpassword: 'Passwd7',
}

const createTempo = (overwrites: Partial<CreationOfTempo> = {}) => {
    return cloneDeep({
        ...defaultDevopsTempoValues,
        ...overwrites
    })
}

export {
    createAWS,
    createGCP,
    createAzure,
    createGithub,
    createGitlab,
    createBitbucket,
    createGoogleContainerRegistry,
    createAmzonECR,
    createDockerHub,
    createGithubContainerRegistry,
    createArgoCD,
    createJenkins,
    createCircleCI,
    createGrafana,
    createLoki,
    createMimir,
    createTempo,
};