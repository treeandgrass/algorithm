class Point {
    constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.valur = value;
    }

    compare(point) {
        if (point.x < this.x) return true;
        if ( point.x === this.x && point.y <= this.y) return true;
        return false;
    }

    distance(point) {
        return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
    }
}

function swap(points, i, j) {
    const tmp = points[i];
    points[i] = points[j];
    points[j] = tmp;
}

function qvote(points, low, high) {
    if (low === high) return;
    let mid = Math.floor((low + high) / 2);
    if (points[low].compare(points[high])) {
        swap(points, low, high);
    }

    if (points[mid].compare(points[high])) {
        swap(points, mid, high);
    }

    if (points[low].compare(points[mid])) {
        swap(points, low, mid);
    }
    return high;
}

function partion(points, low, high) {
    qvote(points, low, high);

    let idx = low;
    for (let i = low; i < high; i++) {
        if (!points[i].compare(points[high])) {
            swap(points, i, idx++);
        }
    }

    swap(points, idx, high);

    return idx;
}



function quickSort(points, low, high) {
    if (low < high) {
        let idx = partion(points, low, high);
        quickSort(points, low, idx - 1);
        quickSort(points, idx + 1, high);
    }
}


function nearsetPoint(points, start, end) {

    let result = {};
    if (end - start === 1) {
        result.distance = points[start].distance(points[end]);
        result.l = points[start];
        result.r = points[end];
        return result;
    }
    if (start >= end) {
       result.distance =  Math.pow(2, 32) - 1;
       return result;
    }

    const mid = Math.floor((start + end) / 2);
    const result1 = nearsetPoint(points, start, mid);
    const result2 = nearsetPoint(points, mid, end);

    result = result1;
    if (result1.distance > result2.distance) {
        result = result2;
    }
    
    let d = result.distance;

    const scriptL = [];
    for (let i = mid; i >= 0; i--) {
        if (points[mid].x - points[i].x <= d) {
            scriptL.push(points[i]);
        } else {
            break;
        }
    }

    let scriptR = [];
    for (let i = mid + 1; i < end; i++ ) {
        if (points[i].x - points[mid].x <= d) {
            scriptR.push(points[i]);
        } else {
            break;
        }
    }

    for (let i = 0; i < scriptL.length; i++) {
        let r = 0;
        while (r < scriptR.length && scriptR[r].y - scriptL[i].y >= d) {
            r++;
        }

        let r1 = r;
        while (r1 < scriptR.length && Math.abs(scriptR[r1].y - scriptL[i].y) <d ) {
            let distance = scriptL[i].distance(scriptR[r1]);
            if (distance < d) {
                result.distance = distance;
                result.l = scriptL[i];
                result.r = scriptR[r1];
                d = distance;
            }
            r1 ++;
        }

        r = r1;
    }

    return result;
}


const points = [];
points.push(new Point(3, 6, 'A'))
points.push(new Point(-2, 6, 'B'))
points.push(new Point(3, 9, 'C'))
points.push(new Point(200, 6, 'D'))
points.push(new Point(3, 90, 'E'))
points.push(new Point(3, 8, 'H'))
points.push(new Point(-12, 7, 'F'))
points.push(new Point(3, 10, 'Q'))
points.push(new Point(10, 12, 'G'))
points.push(new Point(3, 13, 'J'))
points.push(new Point(10, 14, 'K'))
points.push(new Point(-8, 15, 'W'))
points.push(new Point(0, 19, 'X'))
points.push(new Point(80, 20, 'Y'))

quickSort(points, 0, points.length - 1);
console.log(nearsetPoint(points, 0, points.length - 1));