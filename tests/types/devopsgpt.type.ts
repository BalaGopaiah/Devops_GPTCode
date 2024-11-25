

type CreationOfAWS = {
    title: string;
    aws: string;
    awssecretname: string;
    awsaccesskeyId: string;
    awssecretaccessKey: string;
    awsregion: string;
    editawssecretaccessKey: string,
    editawsregion: string;
}

type CreationOfGCP = {
    gcp: string;
    gcpsecretname: string;
    gcpprojectId: string;
    gcpserviceaccountKey: string;
    editgcpserviceaccountKey: string
}

type CreationOfAzure = {
    azure: string ;
    azuresecretname: string;
    azuretenantId: string;
    azureclientId: string;
    azureclientSecret: string;
    editazureclientId: string;
    editazureclientSecret: string;
}

type CreationOfGithub = {
    github: string ;
    githubsecretname: string;
    githubusername: string;
    githubaccessToken: string;
    editgithubaccessToken: string;
}

type CreationOfGilab = {
    gitlab: string ;
    gitlabsecretname: string;
    gitlabusername: string;
    gitlabaccessToken: string;
    editgitlabaccessToken: string;
}

type CreationOfBitbucket = {
    bitbucket: string ;
    bbsecretname: string;
    bbusername: string;
    bbaccessToken: string;
    editbbaccessToken: string;
}

type CreationOfGoogleContainerRegistry = {
    googlecontainerregistry: string ;
    gcrsecretname: string;
    gcrserviceaccountkey: string;
    gcrurl: string;
    editgcrurl: string;
}

type CreationOfAmazonECR = {
    amazonecr: string ;
    amazonecrsecretname: string;
    amazonecrregistryId: string;
    amazonecraccesskeyId: string;
    amazonecrsecretaccesskey: string;
    editamazonecrsecretaccesskey: string;
}

type CreationOfDockerHub = {
    dockerhub: string ;
    dockerhubsecretname: string;
    dockerhuburl: string;
    dockerhubusername: string;
    dockerhubpassword: string;
    editdockerhubusername: string;
    editdockerhubpassword: string;
}

type CreationOfGithubContainerRegistry = {
    ghcr: string ;
    ghcrsecretname: string;
    ghcrregistryurl: string;
    ghcrusername: string;
    ghcrpassword: string;
    editghcrusername: string;
    editghcrpassword: string;
}

type CreationOfArgoCD = {
    argocd: string;
    acdsecretname: string;
    acdendpointurl: string;
    acdusername: string;
    acdpassword: string;
    editacdusername: string;
    editacdpassword: string;
}

type CreationOfJenkins = {
    jenkins: string;
    jsecretname: string;
    jendpointurl: string;
    jusername: string;
    jpassword: string;
    editjusername: string;
    editjpassword: string;
}

type CreationOfCircleCI = {
    circleci: string;
    ccisecretname: string;
    cciendpointurl: string;
    cciusername: string;
    ccipassword: string;
    editcciusername: string;
    editccipassword: string;
}

type CreationOfGrafana = {
    grafana: string;
    gsecretname: string;
    gendpointurl: string;
    gusername: string;
    gpassword: string;
    editgusername: string;
    editgpassword: string;
}
type CreationOfLoki = {
    loki: string;
    lsecretname: string;
    lendpointurl: string;
    lusername: string;
    lpassword: string;
    editlusername: string;
    editlpassword: string;
}
type CreationOfMimir = {
    mimir: string;
    msecretname: string;
    mendpointurl: string;
    musername: string;
    mpassword: string;
    editmusername: string;
    editmpassword: string;
}
type CreationOfTempo = {
    tempo: string;
    tsecretname: string;
    tendpointurl: string;
    tusername: string;
    tpassword: string;
    edittusername: string;
    edittpassword: string;
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