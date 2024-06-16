function Win(b,s){
    if(b[0] == b[1] && b[1] == b[2] && b[2] == s) return s;
    if(b[3] == b[4] && b[4] == b[5] && b[5] == s) return s;
    if(b[6] == b[7] && b[7] == b[8] && b[8] == s) return s;

    if(b[0] == b[3] && b[3] == b[6] && b[6] == s) return s;
    if(b[1] == b[4] && b[4] == b[7] && b[7] == s) return s;
    if(b[2] == b[5] && b[5] == b[8] && b[8] == s) return s;

    if(b[0] == b[4] && b[4] == b[8] && b[8] == s) return s;
    if(b[2] == b[4] && b[4] == b[8] && b[8] == s) return s;

    return ""
}
export default Win;