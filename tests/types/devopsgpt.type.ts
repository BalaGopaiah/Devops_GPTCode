

type CreationOfAWS = {
    title: string;
    aws: string;
    awssecretname: string;
    awsaccesskeyId: string;
    awssecretaccessKey: string;
    awsregion: string;
}

type CreationOfGCP = {
    gcp: string;
    gcpsecretname: string;
    gcpprojectId: string;
    gcpserviceaccountKey: string;
}

type CreationOfAzure = {
    azure: string ;
    azuresecretname: string;
    azuretenantId: string;
    azureclientId: string;
    azureclientSecret: string;
}

type CreationOfGithub = {
    github: string ;
    githubsecretname: string;
    githubusername: string;
    githubaccessToken: string;
}

type CreationOfGilab = {
    gitlab: string ;
    gitlabsecretname: string;
    gitlabusername: string;
    gitlabaccessToken: string;
}

type CreationOfBitbucket = {
    bitbucket: string ;
    bbsecretname: string;
    bbusername: string;
    bbaccessToken: string;
}

type CreationOfGoogleContainerRegistry = {
    googlecontainerregistry: string ;
    gcrsecretname: string;
    gcrserviceaccountkey: string;
    gcrurl: string;
}

type CreationOfAmazonECR = {
    amazonecr: string ;
    amazonecrsecretname: string;
    amazonecrregistryId: string;
    amazonecraccesskeyId: string;
    amazonecrsecretaccesskey: string;
}

type CreationOfDockerHub = {
    dockerhub: string ;
    dockerhubsecretname: string;
    dockerhuburl: string;
    dockerhubusername: string;
    dockerhubpassword: string;
}

type CreationOfGithubContainerRegistry = {
    ghcr: string ;
    ghcrsecretname: string;
    ghcrregistryurl: string;
    ghcrusername: string;
    ghcrpassword: string;
}

type CreationOfArgoCD = {
    argocd: string;
    acdsecretname: string;
    acdendpointurl: string;
    acdusername: string;
    acdpassword: string;
}

type CreationOfJenkins = {
    jenkins: string;
    jsecretname: string;
    jendpointurl: string;
    jusername: string;
    jpassword: string;
}

type CreationOfCircleCI = {
    circleci: string;
    ccisecretname: string;
    cciendpointurl: string;
    cciusername: string;
    ccipassword: string;
}

type CreationOfGrafana = {
    grafana: string;
    gsecretname: string;
    gendpointurl: string;
    gusername: string;
    gpassword: string;
}
type CreationOfLoki = {
    loki: string;
    lsecretname: string;
    lendpointurl: string;
    lusername: string;
    lpassword: string;
}
type CreationOfMimir = {
    mimir: string;
    msecretname: string;
    mendpointurl: string;
    musername: string;
    mpassword: string;
}
type CreationOfTempo = {
    tempo: string;
    tsecretname: string;
    tendpointurl: string;
    tusername: string;
    tpassword: string;
}

export {
    CreationOfAWS,
    CreationOfGCP,
    CreationOfAzure,
    CreationOfGithub,
    CreationOfGilab,
    CreationOfBitbucket,
    CreationOfGoogleContainerRegistry,
    CreationOfAmazonECR,
    CreationOfDockerHub,
    CreationOfGithubContainerRegistry,
    CreationOfArgoCD,
    CreationOfJenkins,
    CreationOfCircleCI,
    CreationOfGrafana,
    CreationOfLoki,
    CreationOfMimir,
    CreationOfTempo,

};