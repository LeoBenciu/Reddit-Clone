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