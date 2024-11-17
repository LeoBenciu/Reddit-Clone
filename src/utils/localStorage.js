export const loadSavedPostIds = ()=>{
    try{
        const serializedData = localStorage.getItem('savedPostIds');
        return serializedData? JSON.parse(serializedData) : [];
    } catch(error){
        console.error('Failed to load posts from local storage', error);
        return [];
    }
};

export const saveSavedPostIds = (postIds) =>{
    try{
        const serializedData = JSON.stringify(postIds);
        localStorage.setItem('savedPostIds', serializedData);
    } catch (error){
        console.error('Failed to save posts to local storage', error);
    }
};

export const loadRecentSubreddits = () =>{
    try{
        const serializedData = localStorage.getItem('recentSubreddits');
        return serializedData? JSON.parse(serializedData): [];
    }catch(error){
        console.error('failed to load recent subreddits', error);
        return [];
    }
};

export const saveRecentSubreddits = (subreddits)=>{
    try{
        const serializedData = JSON.stringify(subreddits);
        localStorage.setItem('recentSubreddits',serializedData);
    }catch (error){
        console.error('failed to save recent subreddits', error);
    }
};

export const loadJoinedSubreddits = ()=>{
    try{const serializedData = localStorage.getItem('joinedSubreddits');
    return serializedData? JSON.parse(serializedData): [];}
    catch(error){
        console.error('failed to load joined subreddits: ', error);
    }
};

export const saveJoinedSubreddits = (subreddits)=>{
    try{
        const serializedData = JSON.stringify(subreddits);
        localStorage.setItem('joinedSubreddits',serializedData);
    } catch(error){
        console.error('failed to save joined subreddits: ', error)
    }
};


export const loadCurrentPostDetails = ()=>{
    try{
        const serializedData = localStorage.getItem('currentPostDetails');
        return serializedData? JSON.parse(serializedData): [];
    }catch(error){
        console.error('failed to load current post details', error)
    }
};

export const saveCurrentPostDetails = (details)=>{
    try{
        const serializedData = JSON.stringify(details);
        localStorage.setItem('currentPostDetails', serializedData);
    }catch(error){
        console.error('failed to save post details because: ', error);
    }
};

export const loadRecentSearch = ()=>{
    try{
        const serializedData = localStorage.getItem('recentSearch');
        return serializedData? JSON.parse(serializedData) : [];
    }catch(error){
        console.error('failed to load recent searches:', error)
    }
};

export const saveRecentSearch = (searches)=>{
    try{
        const serializedData = JSON.stringify(searches);
        localStorage.setItem('recentSearch', serializedData);
    }catch(error){
        console.error('failed to save recent searches:', error);
    }
};