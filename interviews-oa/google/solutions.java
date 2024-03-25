// https://leetcode.com/discuss/interview-question/4849502/Google-or-Question
// 
// Q-1
class Circle {
    int x, y, radius;

    public Circle(int x, int y, int radius) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    public boolean isOverLapping(Circle cir) {
        int radius_square = (cir.radius + this.radius) * (cir.radius + this.radius);
        int distance = (this.x - cir.x) * (this.x - cir.x) - (this.y - cir.y) * (this.y - cir.y);
        return distance <= radius_square;
    }
}
public class CirclesBelongToSameComponenet {

    public boolean circleOfSameComponet(List<Circle> list) {

        int n = list.size();
        int parent[] = new int[n];
        Arrays.fill(parent, -1);

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i != j && list.get(i).isOverLapping(list.get(j))) {
                    int iParent = findParent(i, parent);
                    int jParent = findParent(j, parent);
                    if (iParent != jParent) {
                        parent[iParent] = jParent;
                    }
                }
            }
        }
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (parent[i] == -1) {
                count++;
            }
            if (count > 1)
                return false;
        }
        return true;

    }

    private int findParent(int i, int[] parent) {

        if (parent[i] == -1)
            return i;
        return findParent(parent[i], parent);
    }

    public static void main(String[] args) {
        List<Circle> circles = new ArrayList<>();
        circles.add(new Circle(1, 2, 4));
        circles.add(new Circle(3, 7, 5));
        circles.add(new Circle(2, 2, 4));
        CirclesBelongToSameComponenet c = new CirclesBelongToSameComponenet();
        boolean result = c.circleOfSameComponet(circles);
        System.out.println(result);
    }
}
// ---
// Q-2
//So here we are going from child to parent level
//so we will follow post traversal
//so first we will go to the top left most then right and then root
//+1 we have added here for level

class Solution {
    public List<List<Integer>> findLeaves(TreeNode root) {
        List<List<Integer>> res = new LinkedList<>();
        dfs(root, res);
        return res;
    }

    private int dfs(TreeNode root, List<List<Integer>> res){
        if (root == null)
            return -1;
        int level = Math.max(dfs(root.left, res), dfs(root.right, res)) + 1;
        if (res.size() <= level)
            res.add(new LinkedList<>());
        res.get(level).add(root.val);
        return level;
    }
}

//TC : O(N) SC : O(N) // N -- total number ot nodes in BT
// --
// Q-3
class Node{
    String val;
    Node prev;
    Node next;

    public Node(String val){
        this.val = val;
    }
}

// S: O(unique strings)
class SearchDS{
    int N;
    Map<String, Node> map;
    Node left;
    Node right;

    public SearchDS(int num){
        this.N = num;
        map = new HashMap<>();
        left.next = right;
        right.next = left;
    }

    //R : O(1)
    public void addSearch(String s){
        if(!map.containsKey(s)){
            map.put(s, new Node(s));
        }else{
            remove(map.get(s));
        }

        insert(map.get(s));
    }

    // R: O(N)
    public List<String> getRecentSearches(){
        List<String> res = new ArrayList<>();
        Node curr = this.right;
        int iter = this.N - 1;

        while(iter >= 0 && curr != left){
            res.add(curr.val);
            iter--;
            curr = curr.prev;
        }

        return res;
    }

    //remove node from DLL
    public void remove(Node n){
        Node prv = n.prev;
        Node nxt = n.next;

        prv.next = nxt;
        nxt.prev = prv;
    }

    //add Node at right
    public void insert(Node n){
        Node prv = right.prev;
        Node nxt = right;

        prv.next = n;
        nxt.prev = n;
        n.prev = prv;
        n.next = nxt;
    }
}

// ---
// Q-4
public class Node {
    int min;
    int max;
}

public class find(int[][] grid){
    Node node = recur(grid, 0)
  return node.max - node.min;
}

public Node recur(int[][] grid, int col) {
        if (col == grid[0].length) {
            return new Node(INT_MAX, INT_MIN)
        }
        int pathMin = Integer.MAX_VALUE
        int pathMax = Integer.MIN_VALUE;
        int minCost = Integer.MAX_VALUE;
        Node next = recur(grid, col + 1);
        for(int i=0;i<grid.length;i++) {
            min = Math.min(next.min, grid[i][col]);
            max = Math.max(next.max, grid[i][col]);
            int cost = max - min;
            if (cost < minCost) {
                pathMin = min;
                pathMax = max;
                minCost = cost;
            }
        }
        return new Node(min, max);
}
// --
// Q-5
package org.example;

import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;

//Build the relationship between every key and words. (Build graph)
//Find those keys that are not depend on anyone to construct, and put it into a queue
//Build our own dictionary {key, correct replacement}
//Iterate though our input string, and reconstruct the output.
public class StringSubstitutor {
    public static HashSet<String> getWord(String words) {
        HashSet<String> set = new HashSet<>();
        int i = 0;
        while (i < words.length()) {
            StringBuilder temp = new StringBuilder();
            if (words.charAt(i) == '%') {
                temp.append(words.charAt(++i));
                while (i < words.length() && words.charAt(i) != '%') {
                    temp.append(words.charAt(++i));
                }
                temp.deleteCharAt(temp.length() - 1);
                set.add(temp.toString());
            }
            i++;
        }
        return set;
    }

    public static String replace(String w, HashMap<String, String> dict) {
        StringBuilder temp = new StringBuilder();
        int i = 0;
        while (i < w.length()) {
            if (w.charAt(i) == '%') {
                int l = ++i;
                while (i < w.length() && w.charAt(i) != '%') {
                    i++;
                }
                String newWord = dict.get(w.substring(l, i));
                temp.append(newWord);
                i++;
            } else {
                temp.append(w.charAt(i));
                i++;
            }
        }
        return temp.toString();
    }

    public static HashMap<String, String> replaceHelp(HashMap<String, String> map) {
        HashMap<String, HashSet<String>> graph = new HashMap<>();
        HashMap<String, Integer> indegree = new HashMap<>();
        HashMap<String, String> dict = new HashMap<>();
        Queue<String> queue = new LinkedList<>();

        for (String key : map.keySet()) {
            String words = map.get(key);
            HashSet<String> set = getWord(words);
            if (set.isEmpty()) {
                indegree.put(key, 0);
                dict.put(key, words);
                queue.add(key);
            } else {
                for (String iter : set) {
                    indegree.put(key, indegree.getOrDefault(key, 0) + 1);
                    graph.computeIfAbsent(iter, k -> new HashSet<>()).add(key);
                }
            }
        }
        while (!queue.isEmpty()) {
            String curKey = queue.poll();
            String w = map.get(curKey);

            if (!dict.containsKey(curKey)) {
                dict.put(curKey, replace(w, dict));
            }
            for (String nextKey : graph.getOrDefault(curKey, new HashSet<>())) {
                indegree.put(nextKey, indegree.get(nextKey) - 1);
                if (indegree.get(nextKey) == 0) queue.add(nextKey);
            }
        }
        return dict;
    }

    public static String replaceWord(String input, HashMap<String, String> map) {
        HashMap<String, String> finalDict = replaceHelp(map);
        return replace(input, finalDict);
    }

    public static void main(String[] args) {
        HashMap<String, String> map = new HashMap<>();
        map.put("USER", "admin");
        map.put("HOME", "/%USER%/home");
        String input = " I am %USER% My home is %HOME%";
        System.out.println(replaceWord(input, map));
    }
}
// --
// Q-6
import java.util.Arrays;

public class Test {
    public static void countUser(int[][] session, int n) {
        int[] count = new int[n];
        Arrays.fill(count, 0);
        for (int[] se : session) {
            int s = se[0];
            int e = se[1];
            count[s] += 1;
            if (e + 1 < n) {
                count[e + 1] -= 1;
            }
        }
        for (int i = 1; i < n; i++) {
            count[i] += count[i - 1];
        }

        for (int i = 0; i < n; i++) {
            System.out.println(i + " -> " + count[i]);
        }
    }

    public static void main(String[] args) {
        int[][] session = {{0, 3}, {1, 4}};
        countUser (session, 7);
    }
}
// --
// Q-7
class Solution {
    public String reorganizeString(String s) {
        var charCounts = new int[26];
        for (char c : s.toCharArray()) {
            charCounts[c - 'a']++;
        }

        // Max heap ordered by character counts
        var pq = new PriorityQueue<int[]>((a, b) -> Integer.compare(b[1], a[1]));
        for (int i = 0; i < 26; i++) {
            if (charCounts[i] > 0) {
                pq.offer(new int[]{i + 'a', charCounts[i]});
            }
        }

        var sb = new StringBuilder();
        while (!pq.isEmpty()) {
            var first = pq.poll();
            if (sb.length() == 0 || first[0] != sb.charAt(sb.length() - 1)) {
                sb.append((char) first[0]);
                if (--first[1] > 0) {
                    pq.offer(first);
                }
            } else {
                if (pq.isEmpty()) {
                    return "";
                }

                var second = pq.poll();
                sb.append((char) second[0]);
                if (--second[1] > 0) {
                    pq.offer(second);
                }

                pq.offer(first);
            }
        }

        return sb.toString();
    }
}

//TC : O(N⋅logk) and SC : O(K)
// --
// Q-8
class TrieNode {
    Map<String, TrieNode> children;
    boolean isFile;
    int childrenCount;

    TrieNode() {
        children = new HashMap<>();
        isFile = false;
        childrenCount = 0;
    }
}

class Trie {
    TrieNode root;

    Trie() {
        root = new TrieNode();
    }

    public void insert(String[] words) {
        TrieNode ws = root;

        for (String word : words) {
            ws.childrenCount += 1;
            if (!ws.children.containsKey(word)) {
                ws.children.put(word, new TrieNode());
            }
            ws = ws.children.get(word);
        }
        ws.isFile = true;
    }

    public void decrementChildren(String[] words) {
        TrieNode ws = root;

        for (String word : words) {
            if (!ws.children.containsKey(word)) {
                return;
            }
            ws.childrenCount -= 1;
            ws = ws.children.get(word);
        }
    }

    public void search(String[] words) {
        TrieNode ws = root;

        for (String word : words) {
            if (!ws.children.containsKey(word)) {
                return;
            }
            ws = ws.children.get(word);
            System.out.println(word + ":" + ws.childrenCount);
        }
    }

    public String getPath(String[] words) {
        TrieNode ws = root;
        StringBuilder sb = new StringBuilder();
        for (String word : words) {
            ws = ws.children.get(word);
            if (ws.childrenCount == 0 || ws.isFile) {
                sb.append(word);
                return sb.toString();
            }
            sb.append(word + "/");
        }

        return new String();
    }
}

public class Main {
    public static List compressInput(List all_files, List selected_files) {
        Trie trie = new Trie();

        for (String filePath : all_files) {
            String[] words = filePath.split("/");
            trie.insert(words);
        }

        for (String filePath : all_files) {
            String[] words = filePath.split("/");
            trie.search(words);
        }

        for (String filePath : selected_files) {
            String[] words = filePath.split("/");
            trie.decrementChildren(words);
        }

        for (String filePath : selected_files) {
            String[] words = filePath.split("/");
            trie.search(words);
        }

        List<String> result = new ArrayList<>();

        for (String filePath : selected_files) {
            String[] words = filePath.split("/");
            String finalPath = trie.getPath(words);
            if (finalPath.length() != 0 && !result.contains(finalPath))
                result.add(finalPath);
        }

        return result;
    }

    public static void main(String[] args) {
        List<String> all_files = Arrays.asList("a/b.txt", "b/c.txt", "b/d.txt", "c/e.txt", "c/f/a.txt", "c/f/b.txt", "c/g.txt", "d/a/b.txt");

        List<String> selected_files = Arrays.asList("b/c.txt", "b/d.txt", "c/e.txt", "c/f/a.txt", "c/f/b.txt", "d/a/b.txt");

        System.out.println(compressInput(all_files, selected_files));
    }
}
// ---
// Q-9
public class Main {
    public static void main(String[] args) {
        Log[] logs = new Log[] {
                new Log(0, "start", 0),
                new Log(1, "start", 1),
                new Log(0, "end", 2),
                new Log(2, "start", 6),
                new Log(1, "end", 7),
        };

        /* Log[] logs = new Log[] {
            new Log(0, "start", 0),
            new Log(1, "start", 1),
            new Log(0, "end", 5),
            new Log(1, "end", 2),
        }; */

        RequestTimeOut  re = new RequestTimeOut();
        int[] ans = re.firstExpiredEarliestLog(logs, 3);
        System.out.println(Arrays.toString(ans));
    }
}
class Log {
    int id;
    String type;
    int time;
    public Log(int _id, String _type, int _time) {
        type = _type;
        time = _time;
        id = _id;
    }
}
class RequestTimeOut {
    Queue<Log> queue;
    Set<Integer> logIdSet;
    public RequestTimeOut(){
        queue = new LinkedList();
        logIdSet = new HashSet();
    };
    public int[] firstExpiredEarliestLog(Log[] logs, int timeout){
        // code goes here
        for(Log log: logs) {

            while(!queue.isEmpty() && (queue.peek().time + timeout) < log.time) {
                Log firstLog = queue.remove();
                if(!logIdSet.contains(firstLog.id)) {
                    return new int[]{ firstLog.id, log.time };
                }
            };

            if(log.type.equals("end")) {
                logIdSet.add(log.id);
            } else {
                queue.add(log);
            }

        };
        return new int[]{};
    }
}
// ----
// Q-10
public List<String> solution(String[] strs) {
    return dfs(0, 0, strs, new HashSet<>());
}

private List<String> dfs(int i, int curWordsCount, String[] strs, Set<Character> charsUsed) {
    if (curWordsCount == 5)
        return new ArrayList<>();
    if (i == strs.length)
        return null;

    List<String> result = dfs(i + 1, curWordsCount, strs, charsUsed);
    if (result != null)
        return result;

    if (canAdd(i, strs, charsUsed)) {
        for (char c : strs[i].toCharArray())
            charsUsed.add(c);

        result = dfs(i + 1, curWordsCount + 1, strs, charsUsed);
        if (result != null) {
            result.add(strs[i]);
            return result;
        }
        for (char c : strs[i].toCharArray())
            charsUsed.remove(c);
    }

    return null;
}

private boolean canAdd(int i, String[] strs, Set<Character> charsUsed) {
    for (char c : strs[i].toCharArray()) {
        if (charsUsed.contains(c))
            return false;
    }
    return true;
}
// ---
// Q-11
// Java program for the above approach
import java.util.*;

public class GFG {

    // Function to get the required array
    static void solve(int []arr, int n)
    {

        // Store even elements
        ArrayList<Integer> evens = new ArrayList<Integer>();
        for (int i = 0; i < n; i++) {
            if (arr[i] % 2 == 0)
                evens.add(arr[i]);
        }

        // Sort all even elements
        Collections.sort(evens);

        int l = 0;

        // Placing even elements in sorted order
        for (int i = 0; i < n; i++) {
            if (arr[i] % 2 == 0)
                arr[i] = evens.get(l++);
        }

        // Updated array
        for (int i = 0; i < n; i++)
            System.out.print(arr[i] + " ");
    }

    // Driver function
    public static void main(String []args)
    {
        int N = 5;
        int []arr = { 4, 7, 2, 11, 15 };
        solve(arr, N);

    }
}
// ---
// Q-12
public class Test {
    public static void main(String[] args) {
        int[] A = {23, 4, 5, 20};
        int[] B = {21, 1, 10, 100};
        System.out.println(maxProfitSchedule(A, B));
    }

    public static String maxProfitSchedule(int[] A, int[] B) {
        int days = A.length;

        // dp[day][city], 0 is A and 1 is B
        int[][] dp = new int[days + 1][2]; // 5,2

        for (int day = days - 1; day >= 0; day--) {
            dp[day][0] = Math.max(A[day] + dp[day + 1][0], dp[day + 1][1]); // day 3 [20+0,0],day 2[5+20,100]
            dp[day][1] = Math.max(B[day] + dp[day + 1][1], dp[day + 1][0]); //day 3[100+0,0],day 2[10+100,20]
        }
        //at the end dp[0] --133,132,dp[1]--110,111,dp[2]-100,110,dp[3]-20,100,dp[4]-0,0
        // Construct the result
        StringBuilder sb = new StringBuilder();
        int currentCity = (dp[0][0] > dp[0][1]) ? 0 : 1; //0

        for (int day = 0; day < days; day++) {
            if (currentCity == 0) {
                if (A[day] + dp[day + 1][0] > dp[day + 1][1]) { //133>111
                    sb.append('A');
                } else {
                    sb.append('T');
                    currentCity = 1;
                }
            } else {
                if (B[day] + dp[day + 1][1] > dp[day + 1][0]) {
                    sb.append('B');
                } else {
                    sb.append('T');
                    currentCity = 0;
                }
            }
        }

        return sb.toString();
    }
}
// ---
// Q-13
public class Main {
    public static void main(String[] args) {
        Main main = new Main();
        main.question1();
    }

    Map<Character, Set<Character>> map;
    Map<Character, Integer> salaryMap;
    List<Character> resultChar;
    List<Integer> resultNum;

    private void initMap() {
        map = new HashMap<>();
        map.put('A', new HashSet<>());
        map.put('B', new HashSet<>());
        map.get('A').add('B');
        map.get('A').add('C');
        map.get('A').add('D');
        map.get('B').add('E');

        salaryMap = Map.of(
                'A', 50000,
                'B', 20000,
                'C', 10000,
                'D', 10000,
                'E', 25000
        );
        resultChar = new ArrayList<>();
        resultNum = new ArrayList<>();
    }
    private void question1() {
        initMap();
        dfs('A');
        System.out.println(resultChar.toString());
        System.out.println(resultNum.toString());
    }

    private int[] dfs(char curr) {
        int totalChildren = 0;
        int totalSalary = 0;
        if (map.containsKey(curr)) {
            for (Character i : map.get(curr)) {
                int[] val = dfs(i);
                totalChildren += val[0];
                totalSalary += val[1];
            }
            if (((totalSalary * 1d) / (totalChildren * 1d)) > salaryMap.get(curr) * 1d) {
                resultChar.add(curr);
                resultNum.add(salaryMap.get(curr));
            }
        }
        return new int[] {totalChildren + 1, totalSalary + salaryMap.get(curr)};
    }
}
// ---
// Q-14
package org.example;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Test {
    private static Map<Integer, int[]> getLookupTable(int[][] grid) {
        int rows = grid.length;
        int columns = grid[0].length;
        int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        Map<Integer, int[]> lookupTable = new HashMap<>();
        Set<String> visited = new HashSet<>();

        class DFS {
            public boolean dfs(int row, int column) {
                if (row < 0 || row >= rows || column < 0 || column >= columns) {
                    return false;
                }
                int color = grid[row][column];
                if (color == -1) {
                    return true;
                }
                if (lookupTable.containsKey(color)) {
                    int[] direction = lookupTable.get(color);
                    int nextRow = row + direction[0];
                    int nextCol = column + direction[1];
                    String nextPos = nextRow + "," + nextCol;
                    if (!visited.contains(nextPos)) {
                        visited.add(nextPos);
                        if (dfs(nextRow, nextCol)) {
                            return true;
                        }
                        visited.remove(nextPos);
                    }
                } else {
                    for (int[] direction : directions) {
                        lookupTable.put(color, direction);
                        if (dfs(row, column)) {
                            return true;
                        }
                        lookupTable.remove(color);
                    }
                }
                return false;
            }
        }
        DFS dfs = new DFS();
        if (dfs.dfs(0, 0)) {
            return lookupTable;
        }
        return null;
    }

    public static void main(String[] args) {
        int[][] grid = {
                {0, 1, 0, 0},
                {3, 2, -1, 3},
                {0, 0, 0, 2},
                {0, 0, 0, 4}
        };
        Map<Integer, int[]> lookupTable = getLookupTable(grid);
        if (lookupTable != null) {
            for (Map.Entry<Integer, int[]> entry : lookupTable.entrySet()) {
                System.out.println("Color: " + entry.getKey() + ", Direction: (" + entry.getValue()[0] + ", " + entry.getValue()[1] + ")");
            }
        } else {
            System.out.println("No lookup table found.");
        }
    }
}

// --
// Q-15
package org.example;

import java.util.*;

public class Test {
    public static void main(String[] args) {
        TreeSet<Integer> bottom = new TreeSet<>();
        //bottom contains the N-K elements we want and top the top k elements

        TreeSet<Integer> top = new TreeSet<>(Collections.reverseOrder());

        int N = 5;
        int K = 2;
        ArrayList<Integer> S = new ArrayList<Integer>() {{
            add(20); add(4); add(2); add(1); add(-2); add(20); add(0); add(10);
            add(4); add(1); add(19); add(14); add(11); add(8); add(25); add(1);
        }};
        double sum = 0;
        for(int i = 0; i < S.size(); i++) {
            if(bottom.size() < N - K) {
                bottom.add(S.get(i));
                sum += S.get(i);
            } else {
                //we have read N elements, so we need to remove from either bottom or top the element in position S[i-N]

                if(i >= N) {
                    if(top.contains(S.get(i - N))) {
                        top.remove(S.get(i - N));
                    } else {
                        //it must be in bottom
                        sum -= S.get(i - N);
                        bottom.remove(S.get(i - N));

                        //bring minimum of top to bottom
                        int firstTop = top.first();
                        sum += firstTop;
                        bottom.add(firstTop);
                        top.remove(firstTop);
                    }
                }
                //now process the next element
                int bottomMaxValue = bottom.last();
                if (S.get(i) > bottomMaxValue) {
                    top.add(S.get(i));
                } else {
                    top.add(bottomMaxValue);
                    bottom.remove(bottomMaxValue);
                    bottom.add(S.get(i));
                    sum += (S.get(i) - bottomMaxValue);
                }
                if(i >= N - 1) {
                    System.out.print("Found new mean: " + sum / (N - K) + " from elements ");
                    Iterator<Integer> it = bottom.iterator();
                    while(it.hasNext()) {
                        System.out.print(it.next() + " ");
                    }
                    System.out.println();
                }
            }
        }
    }
}

// --
// Q-16
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Main {
    private static int[][] A;
    private static Map<String, Integer> memo = new HashMap<>();

    public static void main(String[] args) {
        int[] nums = {1, 2, 4, 5, 7, 1, 5, 2, 6, 4, 1, 19};
        A = new int[nums.length][2];
        for (int i = 0; i < nums.length; i++) {
            A[i] = new int[]{nums[i], i};
        }
        Arrays.sort(A, (a, b) -> a[0] - b[0]);
        int res = 0;
        for (int a = 0; a < A.length; a++) {
            for (int b = a + 1; b < A.length; b++) {
                res = Math.max(res, 1 + dp(a, b));
            }
        }
        System.out.println(res);
    }

    private static int dp(int pre, int cur) {
        if (cur >= A.length) {
            return 0;
        }
        String key = pre + "," + cur;
        if (memo.containsKey(key)) {
            return memo.get(key);
        }
        int res = dp(pre, cur + 1);
        if (A[cur][1] > A[pre][1]) {
            int dif = A[cur][0] - A[pre][0];
            int newIdx = findNewIndex(dif + A[cur][0] + 1);
            if (newIdx > cur) {
                res = Math.max(res, 1 + dp(cur, newIdx));
            }
        }
        memo.put(key, res);
        return res;
    }

    private static int findNewIndex(int value) {
        int low = 0;
        int high = A.length - 1;
        while (low <= high) {
            int mid = (low + high) >>> 1;
            if (A[mid][0] < value) {
                low = mid + 1;
            } else if (A[mid][0] > value) {
                high = mid - 1;
            } else {
                return mid;
            }
        }
        return low;
    }
// }
// ---Q-17
Given a series of stones with certain values, whenever you jump on to any stone ,number of points you would earn will be length you have jumped times the value of that stone.
Assume you have reached to the last stone, what would be the maximum score earned
Example : [3,7,10,12,8,10]
for 3 - score 0
for 3,7 - max score till 7 is 7
for 3,7,10 - max score would be max(10x2, 7+10)- 20
for 3,7,10,12 - max score max(12x3,12+20,12x2+7) - 36
n so on
public static void main(String[]args){
        int[]arr={10,8,6,5,4,3};

        int[]ans=solve(arr);

        for(int i=0;i<arr.length;i++)
        System.out.print(ans[i]+", ");   // answer
        }
static int[]solve(int[]nums){
        int n=nums.length;
        int[]dp=new int[n];

        dp[0]=0;
        dp[1]=nums[1];

        for(int i=2;i<n; i++){
        int j=binarySearch(0,i-1,i,nums,dp);

        if(j==i)dp[i]=nums[i]*i;      // take a jump from 0th stone 
        else{
        dp[i]=dp[j]+(nums[i]*(i-j));    // jump to 'jth' stone first & then jump to ith stone
        }
        }
        return dp;
        }

static int binarySearch(int s,int e,int i,int[]nums,int[]dp){
        while(s<=e){
        int mid=(s+e)/2;   // index from where we are going to jump

        int m1=dp[mid]+(nums[i]*(i-mid));     // score when jumped from mid'th stone
        int m2=dp[mid+1];          //score when jumped from mid + 1'th stone

        if(mid+1==i)m2+=(nums[i]*i);      // if mid + 1 stone == ith stone
        else m2+=(nums[i]*(i-(mid+1)));

        if(m1<m2)s=mid+1;
        else e=mid-1;
        }
        return s;   // jump from the s'th stone is decided at last
        }
// ---
// Q-18